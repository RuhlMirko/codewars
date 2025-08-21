String.prototype.isUpperCase = function () {
  const wordsArr = this.split(" ");
  const checkUpper = wordsArr.filter((x) => x === x.toUpperCase());
  return wordsArr.length == checkUpper.length;
};

// return this==this.toUpperCase()

console.log("im not uppercased".isUpperCase());
console.log("YES I AM".isUpperCase());
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase());
