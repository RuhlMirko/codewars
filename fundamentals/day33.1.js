function duplicateEncode(word) {
  const chars = word.toLowerCase().split("");
  let newStr = "";
  for (let i of chars) {
    if (chars.filter((char) => char == i).length > 1) newStr += ")";
    else newStr += "(";
  }
  return newStr;
}

console.log(duplicateEncode("Success")); // )())())  u e appear only once
console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()

function newDuplicateEncode(word) {
  const chars = word.toLowerCase().split("");
  const counts = {};
  for (const c of chars) counts[c] = (counts[c] || 0) + 1;
  return chars.map((c) => (counts[c] > 1 ? ")" : "(")).join("");
}

// return word
// .toLowerCase()
// .split('')
// .map( function (a, i, w) {return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')' })
// .join('')
