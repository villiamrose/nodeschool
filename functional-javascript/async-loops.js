const loadUsers = (userIds, load, done) => {
  const users = [];
  userIds.forEach((id) => {
    load(id, (user) => users.push(user));
  });
  return done(users);
};

module.exports = loadUsers;
