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

console.log(sumDigPow(1, 10)); // 1...10
console.log(sumDigPow(1, 100)); // 1...10,89
console.log(sumDigPow(1, 150)); // 1...10,89,135
