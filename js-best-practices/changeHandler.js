// COINS:
// [n]ickel
// [d]ime
// [q]uarter
const coins = [
  {
    code: 'p',
    title: 'penny',
    value: 1,
  },
  {
    code: 'n',
    title: 'nickel',
    value: 5,
  },
  {
    code: 'd',
    title: 'dime',
    value: 10,
  },
  {
    code: 'q',
    title: 'quarter',
    value: 25,
  },
];

module.exports = {
  getAmount(coinType) {
    const coin = coins.find((coin) => coin.code === coinType);
    if (!coin) throw new Error(`Unrecognized coin ${coinType}`);
    return coin.value;
  },
};
