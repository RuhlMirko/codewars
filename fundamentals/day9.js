function squareSum(numbers) {
  let counter = 0;
  for (let item of numbers) {
    counter += item ** 2;
  }
  return counter;
  /*  One-liner
  return numbers.reduce((sum,num) => sum + (num * num), 0);
*/
}

console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50
console.log(squareSum([])); // 0
