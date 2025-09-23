function getSum(a, b) {
  let lowerNum = a < b ? a : b;
  let higherNum = a > b ? a : b;
  let sum = lowerNum;
  for (let i = lowerNum + 1; i <= higherNum; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(0, -1)); // -1
console.log(getSum(0, 1)); // 1
console.log(getSum(2, 2)); // 2
console.log(getSum(2, 6)); // 2 + 3 + 4 + 5 + 6 = 20
console.log(getSum(-1, 2)); // 2
console.log(getSum(5, -1)); // 14
