#!/bin/bash
# shellcheck disable=2004

BASEDIR="/tmp/algorithmia"
CWD=$(dirname "${BASH_SOURCE[0]}")

NVIM_SERVER="${NVIM_SERVER:-triton}"
NVIM_SOCKET="$(ls /tmp/*"$NVIM_SERVER"* | head -n1)"
EXT=""

function usage {
  echo "usage"
}

NAMES=()
TASKS=()
TESTS=()
TIMES=()
CURR=0
CURR_GROUP=0

function print_files() {
  #     ﱣ
  task_ok="\e[1;36m\e[0m"
  group_ok="\e[1;36mﱣ\e[0m"
  group_wait=""
  group_curr=""
  task_wait=""
  task_n=0
  # echo -e "\n$EXT - $NVIM_SERVER - $(date +%H:%M:%S)"
  echo -e "\n--------------------------"
  for task in "${TASKS[@]}"; do
    if [[ $task == "group" ]]; then
      if [[ ${TIMES[$task_n]} == "" ]]; then
        # current group or pending group
        if [[ $task_n -eq $CURR_GROUP ]]; then
          line="  \e[1m${group_curr} ${NAMES[$task_n]}"
          line="$line    ${TESTS[$task_n]}\e[0m"
        else
          line="  ${group_wait} ${NAMES[$task_n]}"
          line="$line    ${TESTS[$task_n]}"
        fi
      else
        # completed group
        line="  ${group_ok} ${NAMES[$task_n]}"
        line="$line    ${TESTS[$task_n]}    ${TIMES[$task_n]}s"
      fi
    else
      if [[ ${TIMES[$task_n]} == "" ]]; then
        # current task or pending task
        if [[ $task_n -eq $CURR ]]; then
          line="    \e[34;1m${task_wait} ${NAMES[$task_n]}"
          line="$line    ${TESTS[$task_n]}\e[0m"
        else
          line="    ${task_wait} ${NAMES[$task_n]}"
          line="$line    ${TESTS[$task_n]}"
        fi
      else
        # completed task
        line="    ${task_ok} ${NAMES[$task_n]}"
        line="$line    \e[1;36m${TESTS[$task_n]}\e[0m    ${TIMES[$task_n]}s"
      fi
    fi
    echo -e "$line"
    task_n=$((task_n + 1))
  done
}

function watch_files {
  task_n=0
  # get current task and group
  for task in "${TASKS[@]}"; do
    if [[ ${TIMES[$task_n]} == "" ]]; then
      if [[ $task == "group" ]]; then
        CURR_GROUP=$task_n
      else
        CURR=$task_n
        break
      fi
    fi
    task_n=$((task_n + 1))
  done

  # load file in nvim and watch until tests pass
  taskname=${TASKS[$CURR]##*-}
  watch_file="${TASKS[$CURR]}/$taskname.$EXT"
  start_time=$(date +%s)
  echo -e "\nWatching: $watch_file"
  if [[ -z $NVIM_SOCKET ]]; then
    echo -e "Cannot find NVIM SOCKET for $NVIM_SERVER"
  else
    nvr --servername "$NVIM_SOCKET" --remote "$watch_file"
  fi
  print_files
  while inotifywait -q -e close_write "$watch_file"; do
    # TODO: figure out why spaces getting stripped
    rm "${TASKS[$CURR]}/"*.out* 2> /dev/null
    rm "$CWD/"*.exe 2> /dev/null
    mapfile res < <(cpb test "$watch_file")
    task_tests="${TESTS[$CURR]##*/}"
    fail=$(echo -e "${res[@]}" | grep -c ':  W A')
    success=$(echo -e "${res[@]}" | grep -c ':  A C')
    group_success="${TESTS[$CURR_GROUP]%%/*}"
    group_total="${TESTS[$CURR_GROUP]##*/}"
    group_success=$((group_success + success))

    # run for stdout and break when all tests pass
    clear && FORCE_COLOR=3 cpb test "$watch_file"
    if [[ $success == "$task_tests" ]]; then
      TESTS[$CURR]="$success/$task_tests"
      TIMES[$CURR]=$(($(date '+%s') - start_time))
      TESTS[$CURR_GROUP]="$group_success/$group_total"
      break
    elif [[ $success -gt 0 || $fail -gt 0 ]]; then
      TESTS[$CURR]="$success/$task_tests"
      TESTS[$CURR_GROUP]="$group_success/$group_total"
    fi
    print_files
  done

  # recurse until we are through the tree
  watch_files
}

function load_files {
  # prepare file arrays
  basedir="$BASEDIR/$NVIM_SERVER"
  for groupdir in "$basedir/"*; do
    group_n=0
    groupname="${groupdir##*-}"
    NAMES+=("$groupname")
    TASKS+=("group")
    tests_i="${#TESTS[@]}"
    TESTS+=("0/0")
    for taskdir in "$groupdir"/*; do
      taskname=${taskdir##*-}
      NAMES+=("$taskname")
      TASKS+=("$taskdir")
      TIMES+=("")
      test_n=$(ls "$groupdir/${taskdir##*/}/"*.ans? | wc -l)
      group_n=$((test_n + group_n))
      TESTS+=("0/$test_n")
    done
    TESTS[tests_i]="0/"$group_n
  done
}

function setup_files {
  pfx="$1"
  basedir="$BASEDIR/$NVIM_SERVER"
  [[ -d $basedir ]] && rm -r "$basedir"
  mkdir -p "$basedir"

  # move input and answer files
  for groupdir in "$CWD/problems/"*; do
    groupname="${groupdir##*-}"
    for taskdir in "$groupdir/"*; do
      sourcedir="$taskdir"
      targetdir="$basedir/${taskdir//.\/problems\//}"
      taskname="${taskdir##*-}"
      if [[ -f "$sourcedir/$taskname.ans1" ]]; then
        mkdir -p "$targetdir/answer"
        cp "$sourcedir/"*.ans? "$targetdir"
        cp "$sourcedir/"*.in? "$targetdir"
        cp "$sourcedir/$taskname.$EXT" "$targetdir/answer/$taskname.answer.$EXT"
        echo "$pfx" "$groupname:$taskname" > "$targetdir/$taskname.$EXT"
        cat "$sourcedir/problem.txt" | sed "s_^_${pfx} _" >> "$targetdir/$taskname.$EXT"
      fi
    done
  done
}

function main {
  EXT="$1"
  setup_files "$2"
  load_files
  clear
  watch_files
}

for arg in "$@"; do
  # ruby, rust, c
  case "$arg" in
    --python | --py) main "py" "#" ;;
    --bash | --sh) main "sh" "#" ;;
    --lua) main "lua" "--" ;;
    --javascript | --js) main "js" "//" ;;
    --golang | --go) main "go" "//" ;;
    *)
      echo "Unknown argumment: $arg"
      usage
      exit 1
      ;;
  esac
done

# Compiling...
#
# Test Case 1:  A C
#
#  Input
# Hello
# ... (the rest of the input is hidden)
#
#  Your Output
# Hello
#
# Test Case 2:  A C
#  Input
# World.
# ... (the rest of the input is hidden)
#
#  Your Output
# World.

# Summary:  2 / 2 AC
