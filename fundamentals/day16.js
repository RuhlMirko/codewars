function arrayDiff(a, b) {
  return a.filter((word) => word != b);
}

console.log(arrayDiff([1, 2], [1])); // [1]
console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
console.log(arrayDiff([1, 2, 2], [2])); // [1]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1,3]
