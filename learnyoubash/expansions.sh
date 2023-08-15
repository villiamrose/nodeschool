#!/usr/bin/env bash
RESULT=$(( ($2 + $3) * $1 ))
DIR_TREE=(project-$RESULT/{src,dest,test}/{index,util}.js)
echo ${DIR_TREE[*]}