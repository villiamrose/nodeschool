const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

module.exports = {
  insertCoin(coinType) {
    const value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  isValidAmount: balanceManager.isValidAmount,

  releaseChange() {
    const currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },
  convertToChange: changeHandler.convertToChange,
  vendProduct: productInventory.vendProduct,
  getProducts: productInventory.getProducts,
};
