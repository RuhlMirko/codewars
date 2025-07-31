// function doubleChar(str) {
//   let newStr = "";
//   for (let i of str) {
//     newStr += i + i;
//   }
//   return newStr;
// }

function doubleChar(str) {
  return str
    .split("")
    .map((char) => char + char)
    .join("");
}

console.log(doubleChar("String")); // "SSttrriinngg"
console.log(doubleChar("Hello World!")); // "HHeelllloo  WWoorrlldd!!"
console.log(doubleChar("1234!_ ")); // "11223344!!__
