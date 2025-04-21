var countSheep = function (num) {
  let newStr = "";
  for (let i = 1; i <= num; i++) {
    newStr += `${i} sheep... `;
  }
  return newStr;
};

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
