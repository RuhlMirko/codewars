function digPow(n, p) {
  const digits = String(n).split("").map(Number);
  const sum = digits.reduce((acc, digit, idx) => acc + digit ** (p + idx), 0);
  return sum % n === 0 ? sum / n : -1;
}

console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
