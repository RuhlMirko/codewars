function getSum(a, b) {
  let lowerNum = a < b ? a : b;
  let higherNum = a > b ? a : b;
  let sum = lowerNum;
  for (let i = lowerNum + 1; i <= higherNum; i++) {
    sum += i;
  }
  return sum;
}

function newgetSum(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  console.log(max - min + 1, min + max);
  return ((max - min + 1) * (min + max)) / 2;
}

console.log(newgetSum(0, -1)); // -1
console.log(newgetSum(0, 1)); // 1
console.log(newgetSum(2, 2)); // 2
console.log(newgetSum(2, 6)); // 20
console.log(newgetSum(-1, 2)); // 2
console.log(newgetSum(5, -1)); // 14

// console.log(getSum(0, -1)); // -1
// console.log(getSum(0, 1)); // 1
// console.log(getSum(2, 2)); // 2
// console.log(getSum(2, 6)); // 2 + 3 + 4 + 5 + 6 = 20
// console.log(getSum(-1, 2)); // 2
// console.log(getSum(5, -1)); // 14
