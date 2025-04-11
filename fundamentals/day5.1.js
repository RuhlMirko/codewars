function countPositivesSumNegatives(input) {
  let posCounter = 0;
  let negCounter = 0;

  if (input == null || input.length == 0) {
    return [];
  }
  for (let i of input) {
    if (input == null || input == 0) {
      continue;
    } else if (i > 0) {
      posCounter++;
    } else {
      negCounter += i;
    }
  }

  return [posCounter, negCounter];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10,-65]
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
console.log(countPositivesSumNegatives([0, 0]));
console.log(countPositivesSumNegatives([0]));
console.log(countPositivesSumNegatives([-8, -55]));
console.log(countPositivesSumNegatives([8, 55]));

/*
If the input is an empty array or is null, return an empty array.
Testing for input = [0]: expected [] to deeply equal [ +0, +0 ]
*/
