function duckCount() {
  const args = Array.prototype.slice.call(arguments);
  const quackers = args.filter((arg) => Object.prototype.hasOwnProperty.call(arg, 'quack'));
  return quackers.length;
}

module.exports = duckCount;
