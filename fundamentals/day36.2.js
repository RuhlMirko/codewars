function getDigits(num) {
  let remainder = 0;
  let digitsAmount = 1;
  do {
    remainder = num / 10;
    digitsAmount++;
    num = remainder;
  } while (remainder > 10);

  return digitsAmount;
}
console.log(getDigits(12)); // 2
console.log(getDigits(234)); // 3
console.log(getDigits(3456)); // 4
console.log(getDigits(3456789012)); // 10

/* ////////////////////////////////////////////////
This exercise was made in inspiration of a youtube video
https://youtu.be/QHhRaiDeAB8?feature=shared
The function needs to return the number of digits of a given number
without using any string conversion operations, only math operators
are allowed to solve this problem
///////////////////////////////////////////////////
*/
