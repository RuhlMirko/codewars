function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

console.log(sumStr("4", "5")); //9
console.log(sumStr("34", "5")); //39
console.log(sumStr("", "")); //0
console.log(sumStr("-5", "3")); //-2
