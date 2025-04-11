function countPositivesSumNegatives(input) {
  return input.reduce(
    ([posCount, negSum], num) => [
      num > 0 ? posCount + 1 : posCount,
      num < 0 ? negSum + num : negSum,
    ],
    [0, 0]
  );
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10,-65]
