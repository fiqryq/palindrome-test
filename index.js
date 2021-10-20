function isPalindrom(word) {
  const rawText = word.split("").reverse().join("");
  const result = word === rawText ? true : false;
  return result;
}

module.exports = isPalindrom;
