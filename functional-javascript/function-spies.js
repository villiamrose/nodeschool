const Spy = (target, method) => {
  const prop = {
    count: 0,
  };

  const origMethod = target[method];
  target[method] = function fn() {
    prop.count += 1;
    return origMethod.apply(this, arguments);
  };

  return prop;
};

module.exports = Spy;
