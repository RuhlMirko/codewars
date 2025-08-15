function oddOrEven(array) {
  return array.reduce((acc, curr) => acc + curr, 0) % 2 ? "odd" : "even";
}

console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([1023, 1, 2]));
