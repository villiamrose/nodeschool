#!/usr/bin/env bash
looper () {
  indent=$3

  if [[ $1 == $2 ]]; then 
    return 0 
  fi

  if [[ $(($1 % 2)) == 0 ]]; then 
    for ((i = 0; i < $indent; i++)) {
      echo -n ' '
    }
    echo $1
    indent=$(($indent + 1))
  fi

  looper $(($1 + 1)) $2 $indent
}

main () {
  echo $FUNCNAME
  looper $1 $2 1
}

main $1 $2