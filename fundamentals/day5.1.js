function countPositivesSumNegatives(input) {
  let posCounter = 0;
  let negCounter = 0;

  for (let i in input) {
    if (input[i] !== 0) {
      if (input[i] > 0) {
        posCounter++;
      } else {
        negCounter += input[i];
      }
    }
  }
  return [posCounter, negCounter];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10,-65]
