function sumDigPow(a, b) {
  const retArr = [];
  for (let currNum = a; currNum <= b; currNum++) {
    const digits = currNum.toString().split("").map(Number);
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i] ** (i + 1);
    }
    if (sum == currNum) retArr.push(currNum);
  }
  return retArr;
}

// One liner
const EUREKAS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135, 175, 518, 598, 1306, 1676, 2427, 2646798,
];
const newSumDigPow = (a, b) => EUREKAS.filter((n) => a <= n && n <= b);

console.log(sumDigPow(1, 10)); // 1...10
console.log(sumDigPow(1, 100)); // 1...10,89
console.log(sumDigPow(1, 150)); // 1...10,89,135
