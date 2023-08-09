const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

const products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1',
  },
];

module.exports = {
  getProducts() {
    return products;
  },

  getProduct(productId) {
    const product = products.find((p) => { return p.id === productId; });
    return product;
  },

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

  vendProduct(productId) {
    const product = this.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  },

};
