const reduce = (arr, fn, init) => {
  if (!arr.length) {
    let newVal = init;
    newVal = fn(arr[0]);
    return reduce(arr.shift(), fn, newVal);
  }
  return init;
};

module.exports = reduce;
