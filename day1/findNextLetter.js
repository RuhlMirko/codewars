"use strict";
function findMissingLetter(array) {
  let codes = array.map((e) => e.charCodeAt(0));
  console.log(codes);

  for (let i in codes) {
    if (codes[i] + 1 != codes[i + 1]) {
      return String.fromCharCode(codes[i] + 1);
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "e", "f"])); // e
console.log(findMissingLetter(["O", "Q", "R", "S"])); // P
