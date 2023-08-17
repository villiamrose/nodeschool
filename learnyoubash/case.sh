case "$1" in 
  ("jpg"|"jpeg")
    echo "It is jpeg."
    ;;
  ("png"|"gif")
    echo "It is $1."
    ;;
  (*)
    echo "$1 is not an image!"
    ;;
esac