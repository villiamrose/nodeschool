let balance = 0;

module.exports = {
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
    // This method decreases the balance of the vending machine. If the balance amount is not
    // enough to cover the purchase, the method throws an error.
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
