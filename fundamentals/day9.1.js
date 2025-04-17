var number = function (busStops) {
  let counter = 0;
  for (let first of busStops) {
    counter += first[0];
    counter -= first[1];
  }
  return counter;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); // 5
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
); // 7

console.log(number([[0, 0]])); // 0
