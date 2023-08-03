function repeat(operation, num) {
  if (num <= 0) return null;
  operation();
  return () => repeat(operation, --num);
}

function trampoline(fn) {
  let next = fn();
  while (next) {
    next = next();
  }
}

module.exports = (operation, num) => {
  return trampoline(() => repeat(operation, num));
};
