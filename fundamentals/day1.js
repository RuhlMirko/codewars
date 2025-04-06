"use strict";
function sum(numbers) {
  let counter = 0;
  for (let i in numbers) {
    counter += numbers[i];
  }
  return counter;
}

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([-2.398]));
console.log(sum([]));
