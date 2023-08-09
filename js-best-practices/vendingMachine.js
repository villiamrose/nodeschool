const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

let balance = 0;

const products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1',
  },
];

module.exports = {
  canAfford(amount) {
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

  getAmount(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    switch (coinType) {
      case 'p': return 1;
      case 'n': return 5;
      case 'd': return 10;
      case 'q': return 25;
      default: throw new Error(`Unrecognized coin ${coinType}`);
    }
  },

  getBalance() {
    return balance;
  },

  getProducts() {
    return products;
  },

  getProduct(productId) {
    const product = products.find((p) => { return p.id === productId; });
    return product;
  },

  increaseBalance(amount) {
    balance += amount;
  },

  insertCoin(coinType) {
    const value = this.getAmount(coinType);
    this.increaseBalance(value);
  },

  isValidAmount(amount) {
    if (amount === null) {
      return false;
    }
    return true;
  },

  releaseChange() {
    const currentBalance = this.getBalance();
    this.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  vendProduct(productId) {
    const product = this.getProduct(productId);
    this.decreaseBalance(product.price);
    return product;
  },

};
