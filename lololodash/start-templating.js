const _ = require('lodash');

const worker = (data) => {
  const logins = _.size(data.login);
  return _.template('Hello <%= name %> (logins: <%= logins %>)')({ name: data.name, logins });
};

module.exports = worker;
