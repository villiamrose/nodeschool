const balanceManager = require('./balanceManager');

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

  vendProduct(productId) {
    const product = this.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  },
};
