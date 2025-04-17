var number = function (busStops) {
  for (let first in busStops) {
    for (let second in first) {
      console.log(second);
    }
  }
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
