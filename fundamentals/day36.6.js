function countSmileys(arr) {
  let count = 0;
  for (let i of arr) {
    if (i.startsWith(":") || i.startsWith(";")) {
      if (i.endsWith("D") || i.endsWith(")")) {
        count++;
      }
    }
  }
  return count;
}

function newCountSmileys(arr) {
  return arr.filter((s) => /^[:;][-~]?[)D]$/.test(s)).length;
}

console.log(countSmileys([])); // 0
console.log(countSmileys([":D", ":~)", ";~D", ":)"])); // 4
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); // 2
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // 1
