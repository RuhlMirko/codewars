function arrayDiff(a, b) {
  const diffArr = [];
  for (let i of a) {
    // console.log(b.map((item) => i == item));
  }

  return diffArr;
}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
console.log(arrayDiff([1, 2, 2], [2])); // [1]
console.log(arrayDiff([1, 2, 2], [])); // [1,2,2]
console.log(arrayDiff([], [1, 2])); // []
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
