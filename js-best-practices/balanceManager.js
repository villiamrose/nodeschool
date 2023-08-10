let balance = 0;

module.exports = {
  isValidAmount(amount) {
    if (amount === null || amount === undefined) {
      return false;
    }
    return true;
  },
  canAfford(amount) {
    let errorMessage;

    if (!this.isValidAmount(amount)) {
      errorMessage = 'Invalid Input';
    }
    if (errorMessage) {
      throw new Error(errorMessage);
    }
    return amount <= balance;
  },

  decreaseBalance(amount) {
    let errorMessage;
    if (!this.canAfford(amount)) {
      errorMessage = 'Insufficient balance';
    }
    if (errorMessage) {
      throw new Error(errorMessage);
    }
    balance -= amount;
  },

  getBalance() {
    return balance;
  },

  increaseBalance(amount) {
    balance += amount;
  },
};
