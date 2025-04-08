"use strict";

function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map((d) => d ** 2)
      .join("")
  );
}

/*
function squareDigits(num) {
  const srtNum = String(num);
  let result = "";
  for (let i in srtNum) {
    result += srtNum[i] ** 2;
  }
  return Number(result);
}
*/

console.log(squareDigits(9119)); // 81-1-1-81
console.log(squareDigits(765)); // 49-36-25
/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.
 */
