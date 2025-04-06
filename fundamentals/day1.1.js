"use strict";

var summation = function (num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    counter += i;
  }
  return counter;
};

console.log(summation(2));
console.log(summation(8));
console.log(summation(16));
