String.prototype.toAlternatingCase = function () {
  const thisArr = this.split("");
  const newArr = [];
  for (let char of thisArr) {
    if (char === char.toUpperCase()) {
      newArr.push(char.toLowerCase());
    } else if (char === char.toLowerCase()) {
      newArr.push(char.toUpperCase());
    } else {
      newArr.push(char);
    }
  }
  return newArr.join("");
  // One Liner
  // return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
};

console.log("hello world".toAlternatingCase()); //"HELLO WORLD"
console.log("HELLO WORLD".toAlternatingCase()); // "hello world"
console.log("hello WORLD".toAlternatingCase()); // "HELLO world"
console.log("HeLLo WoRLD".toAlternatingCase()); // "hEllO wOrld"
console.log("12345".toAlternatingCase()); // Non-alphabetical characters are unaffected "12345"
console.log("1a2b3c4d5e".toAlternatingCase()); // "1A2B3C4D5E"
console.log("String.prototype.toAlternatingCase".toAlternatingCase()); //===    "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
