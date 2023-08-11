const _ = require('lodash');

const sumOrders = (sum, order) => sum + order.quantity;

const worker = (list) => {
  return _.chain(list)
    .groupBy('article')
    .reduce((result, current, key) => {
      result.push({
        article: +key,
        total_orders: _.reduce(current, sumOrders, 0),
      });
      return result;
    }, [])
    .sortBy((item) => -item.total_orders)
    .value();
};

module.exports = worker;
