function arrayDiff(a, b) {
  let nonMatches = [];
  for (let i in a) {
    for (let j in b) {
      if (a[i] != b[j]) {
      }
    }
  }
}

console.log(arrayDiff([1, 2], [2])); // [2]
console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
console.log(arrayDiff([1, 2, 2], [2])); // [1]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1,3]
