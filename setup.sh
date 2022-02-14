#!/bin/bash

BASEDIR="/tmp/algorithmia"
CWD=$(dirname "${BASH_SOURCE[0]}")

function usage {
  echo "usage"
}

function setup_c {
  echo "setup c"
}
function setup_js {
  echo "setup js"
}
function setup_go {
  echo "setup go"
}
function setup_lua {
  echo "setup lua"
}
function setup_sh {
  echo "setup sh"
}
function setup_python {
  echo "setup python"
}

function setup_problems {
  ext="$1"
  # language sepcific
  for file in $(fd --full-path "$CWD" problem.txt); do
    eval "setup_${ext}" "$file"
  done

}
function setup_files {
  ext="$1"
  dir="$BASEDIR/$(date '+%m%d.%H%M')"
  mkdir "$dir"

  # move input and answer files
  for file in $(fd --full-path "$CWD" --extension=txt); do
    file_dir="$CWD/$(dirname "$file")"
    dest_dir="${BASEDIR}/${file_dir}"
    [[ ! -d "$dest_dir" ]] && mkdir "$"
    cp -v "$file" "$dest_dir"
  done
  setup_problems "$ext"
}

for arg in "$@"; do
  case "$arg" in
    --js) setup_files "js" ;;
    --go) setup_files "go" ;;
    *)
      echo "Unknown argumment: $arg"
      usage
      exit 1
      ;;
  esac
done
