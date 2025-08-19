function expandedForm(num) {
  const validNums = [];
  const numArr = String(num).split("");
  for (let i = numArr.length - 1, j = 1; i >= 0; i--, j = j * 10) {
    const sum = numArr[i] * j;
    if (sum) validNums.push(sum);
  }
  return validNums.reverse().join(" + ");
}

console.log(expandedForm(12)); // 10 + 2
console.log(expandedForm(45)); // 40 + 5
console.log(expandedForm(70304)); // 70000 + 300 + 4

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//https://www.mathsisfun.com/definitions/expanded-notation.html

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!
//https://www.codewars.com/kata/write-number-in-expanded-form-part-2
