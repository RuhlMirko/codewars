function queueTime(customers, n) {
  const totalTime = customers.reduce((acc, curr) => acc + curr, 0);
  const longestCheckout = Math.max(...customers);
  const finalTime = totalTime / n;
  return finalTime >= longestCheckout ? finalTime : longestCheckout;
}

console.log(queueTime([1, 2, 3, 4], 1)); // 10
console.log(queueTime([10, 2, 3], 2)); // 12
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // 9
console.log(queueTime([1, 2, 3, 4, 5], 100)); // 5
