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
  convertToChange(cents) {
    let changes = [];
    const counts = coins.reduce((arr, coin) => {
      const obj = {
        code: coin.code,
        value: coin.value,
        count: Math.floor(cents / coin.value),
      };
      if (obj.count > 0) arr.push(obj);
      return arr;
    }, []);

    if (counts.length) {
      const lastIdx = counts.length - 1;
      const max = counts[lastIdx];
      for (let i = 0; i < max.count; i++) {
        changes.push(max.code);
      }
      const remaining = cents - (max.value * max.count);
      changes = this.convertToChange(remaining).concat(changes);
    }
    return changes.sort();
  },
};
