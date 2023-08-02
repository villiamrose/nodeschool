const arrayMap = (arr, fn) => {
  return arr.reduce((prev, current) => {
    prev.push(fn(current));
    return prev;
  }, []);
};

module.exports = arrayMap;
