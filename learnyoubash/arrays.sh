#!/usr/bin/env bash

params=($*)
myArray=(I am ${params[*]:1:2} and ${params[3]})
echo ${myArray[*]}