const { slice } = Array.prototype;

const logger = (namespace) => {
  return function fn() {
    const args = slice.call(arguments);
    console.log.apply(null, [namespace].concat(args));
  };
};

module.exports = logger;
