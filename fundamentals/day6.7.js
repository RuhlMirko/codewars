function digPow(n, p) {
  const srtNum = n.toString();
  let counter = 0;
  for (let i = 0; i < srtNum.length; i++) {
    counter += Number(srtNum[i]) ** (p + i);
  }
  console.log(counter);
}

console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
