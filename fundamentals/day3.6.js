function SeriesSum(n) {
  const base = 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += 1 / (i * 3 + base);
    console.log(`1 / (${i} * 3 + ${base}) → sum: ${sum}`);
  }

  return Math.floor(sum * 100) / 100;
}

console.log(SeriesSum(0)); // 1.00
console.log(SeriesSum(1)); // 1.00
console.log(SeriesSum(2)); // 1.25
console.log(SeriesSum(5)); // 1.57
console.log(SeriesSum(4)); // 1.49
