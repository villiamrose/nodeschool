const _ = require('lodash');

const worker = (list) => {
  return _.forEach(list, (item, index, collection) => {
    const { population } = item;
    let size;

    if (population > 1) {
      size = 'big';
    } else if (population > 0.5) {
      size = 'med';
    } else {
      size = 'small';
    }

    collection[index] = {
      population,
      size,
    };
  });
};

module.exports = worker;
