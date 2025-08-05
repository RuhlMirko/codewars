function SeriesSum(n) {
  if (n == 0) return (0.0).toFixed(2);
  let count = 1.0;
  let nextDiv = 1;
  for (let i = 1; i < n; i++) {
    nextDiv += 3;
    count += 1 / nextDiv;
  }
  return count.toFixed(2);
}

function newSeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}

// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
console.log(SeriesSum(0)); // 0.00
console.log(newSeriesSum(0)); // 0.00
console.log(SeriesSum(3)); // 1.39
console.log(SeriesSum(4)); // 1.49
console.log(newSeriesSum(4)); // 1.49
