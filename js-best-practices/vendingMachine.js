const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

module.exports = {
  insertCoin(coinType) {
    const value = this.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  isValidAmount(amount) {
    if (amount === null) {
      return false;
    }
    return true;
  },

  releaseChange() {
    const currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

};
