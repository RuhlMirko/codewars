const stringToNumber = function (str) {
  return parseInt(str, 10);
};

console.log(stringToNumber("1234")); // 1234
console.log(stringToNumber("605")); // 605
console.log(stringToNumber("1405")); // 1405
console.log(stringToNumber("-7")); // -7
