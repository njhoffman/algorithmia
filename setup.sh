#!/bin/bash
# shellcheck disable=2004

BASEDIR="/tmp/algorithmia"
CWD=$(dirname "${BASH_SOURCE[0]}")

NVIM_SERVER="${NVIM_SERVER:-pricus}"
NVIM_SOCKET="$(fd "$NVIM_SERVER" /tmp | head -n1)"
EXT=""

# https://github.com/khan4019/front-end-Interview-Questions
# https://www.alxolr.com/articles/squeeze-node-js-performance-with-flame-graphs#flame-graphs

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
        if [[ $task_n -eq $CURR_GROUP ]]; then
          line="  \e[1m${group_curr} ${NAMES[$task_n]}\e[0m"
          line="$line    ${TESTS[$task_n]}"
        else
          line="  ${group_wait} ${NAMES[$task_n]}"
          line="$line    ${TESTS[$task_n]}"
        fi
      else
        line="  ${group_ok} ${NAMES[$task_n]}"
        line="$line    ${TESTS[$task_n]}    ${TIMES[$task_n]}s"
      fi
    else
      if [[ ${TIMES[$task_n]} == "" ]]; then
        if [[ $task_n -eq $CURR ]]; then
          line="    \e[34;1;3m${task_wait} ${NAMES[$task_n]}"
          line="$line    ${TESTS[$task_n]}\e[0m"
        else
          line="    ${task_wait} ${NAMES[$task_n]}"
          line="$line    ${TESTS[$task_n]}"
        fi
      else
        line="    ${task_ok} ${NAMES[$task_n]}"
        line="$line    \e[1;36m${TESTS[$task_n]}\e[0m    ${TIMES[$task_n]}s"
      fi
    fi
    echo -e "$line"
    task_n=$((task_n + 1))
  done
}

function load_files {
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
  watch_files
}

function watch_files {
  task_n=0
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
  taskname=${TASKS[$CURR]##*-}
  watch_file="${TASKS[$CURR]}/$taskname.$EXT"
  start_time=$(date +%s)
  print_files
  echo -e "\nWatching: $watch_file"
  while inotifywait -q -e close_write "$watch_file"; do
    # TODO: figure out why spaces getting stripped
    rm "${TASKS[$CURR]}/"*.out* 2> /dev/null
    rm "$CWD/"*.exe 2> /dev/null
    mapfile res < <(cpb test "$watch_file")
    task_tests="${TESTS[$CURR]##*/}"
    fail=$(echo -e "${res[@]}" | grep -c ':  W A')
    success=$(echo -e "${res[@]}" | grep -c ':  A C')
    echo "succ: $success fail: $fail"
    clear && FORCE_COLOR=3 cpb test "$watch_file"
    if [[ $success == "$task_tests" ]]; then
      TESTS[$CURR]="$success/$task_tests"
      TIMES[$CURR]=$(($(date '+%s') - start_time))
      group_success="${TESTS[$CURR_GROUP]%%/*}"
      group_total="${TESTS[$CURR_GROUP]##*/}"
      group_success=$((group_success + success))
      TESTS[$CURR_GROUP]="$group_success/$group_total"
      break
    elif [[ $success -gt 0 || $fail -gt 0 ]]; then
      TESTS[$CURR]="$success/$task_tests"
    fi
    print_files
  done
  watch_files
}

function setup_files {
  EXT="$1"
  pfx="$2"

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
  load_files
}

for arg in "$@"; do
  # ruby, rust, c
  case "$arg" in
    --python | --py) setup_files "py" "#" ;;
    --bash | --sh) setup_files "sh" "#" ;;
    --lua) setup_files "lua" "--" ;;
    --javascript | --js) setup_files "js" "//" ;;
    --golang | --go) setup_files "go" "//" ;;
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
