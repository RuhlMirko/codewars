"use strict";

function betterThanAverage(classPoints, yourPoints) {
  const classAvg =
    classPoints.reduce((sum, point) => sum + point, 0) / classPoints.length;
  return yourPoints >= classAvg;
}

console.log(betterThanAverage([2, 5], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
