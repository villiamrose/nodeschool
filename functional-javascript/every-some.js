const checkUsersValid = (goodUsers) => {
  return (submittedUsers) => {
    return submittedUsers.every((sUsr) => {
      return goodUsers.some((gUsr) => {
        return sUsr.id === gUsr.id;
      });
    });
  };
};

module.exports = checkUsersValid;
