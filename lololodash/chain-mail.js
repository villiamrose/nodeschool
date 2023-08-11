const _ = require('lodash');

const worker = (list) => {
  return _.chain(list)
    .map((item) => `${item.toUpperCase()}CHAINED`)
    .sortBy()
    .value();
};

module.exports = worker;
