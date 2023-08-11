const _ = require('lodash');

const worker = (list) => {
  return _.chain(list)
    .groupBy('username')
    .map((comments, username) => ({
      username,
      comment_count: _.size(comments),
    }))
    .sortBy((item) => -item.comment_count)
    .value();
};

module.exports = worker;
