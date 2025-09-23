function getSum(a, b) {
  console.log("Next sum:");
  let lowerNum = a < b ? a : b;
  let sum = lowerNum;
  for (let i = lowerNum; i < b; i++) {
    console.log(i);
    sum += i;
  }

  return sum;
}

console.log(getSum(0, -1)); // -1
console.log(getSum(0, 1)); // 1
console.log(getSum(2, 2)); // 2
console.log(getSum(2, 6)); // 2 + 4 + 6 = 12
console.log(getSum(-1, 2)); // 2
