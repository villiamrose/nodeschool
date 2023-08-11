const _ = require('lodash');

const worker = (list) => {
  const totalIncome = _.reduce(list, (sum, current) => sum + current.income, 0);
  const average = totalIncome / _.size(list);
  const underperform = _.chain(list)
    .filter((item) => item.income <= average)
    .sortBy('income');
  const overperform = _.chain(list)
    .filter((item) => item.income > average)
    .sortBy('income');
  return {
    average,
    underperform,
    overperform,
  };
};

module.exports = worker;
