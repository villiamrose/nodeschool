const _ = require('lodash');

const worker = (list) => {
  const threshold = (value) => value > 19;
  const hot = [];
  const warm = [];

  _.forEach(list, (item, key) => {
    if (_.every(item, threshold)) {
      hot.push(key);
    } else if (_.some(item, threshold)) {
      warm.push(key);
    }
  });

  return { hot, warm };
};

module.exports = worker;
