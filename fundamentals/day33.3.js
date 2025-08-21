function sortArray(array) {
  const resultArr = array.map((x) =>
    x % 2 ? [...array.filter((n) => n % 2).sort((a, b) => a - b)].shift() : x
  );

  return resultArr;
}

console.log(sortArray([7, 1])); // 1 7
console.log(sortArray([5, 8, 6, 3, 4])); // 3 8 6 5 4
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // 1 8 3 6 5 4 7 2 9 0
console.log(sortArray([7, 2, 1])); // 1 2 7
// console.log(sortArray());
