const countWords = (inputWords) => {
  return inputWords.reduce((prev, word) => {
    const obj = prev;
    const count = obj[word] || 0;
    obj[word] = count + 1;
    return obj;
  }, {});
};

module.exports = countWords;
