const _ = require('lodash');

const worker = (list) => {
  return _.sortBy(list, (item) => -item.quantity);
};

module.exports = worker;
