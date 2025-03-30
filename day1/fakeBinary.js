function fakeBin(x) {
  let newStr = "";
  for (let i in x) {
    if (Number(x[i]) >= 5) {
      newStr += "1";
    } else {
      newStr += "0";
    }
  }
  return newStr;
}

console.log(fakeBin("45385593107843568"));
console.log(fakeBin("509321967506747"));
console.log(fakeBin("366058562030849490134388085"));
