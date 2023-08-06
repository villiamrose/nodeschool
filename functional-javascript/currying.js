const curry = (fn, params, n) => {
  if (n === 0) {
    return fn(...params);
  }
  return (x) => {
    return curry(fn, params.concat([x]), n - 1);
  };
};

const curryN = (fn, n) => {
  const cc = n || fn.length;
  return curry(fn, [], cc);
};

module.exports = curryN;
