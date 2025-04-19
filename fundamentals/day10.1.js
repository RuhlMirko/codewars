//return the total number of smiling faces in the array

function countSmileys(arr) {
  let counter = 0;
  for (let i of arr) {
    if (i[0] == ":" || i[0] == ";") {
      if (i.charAt(i.length - 1) == "D" || i.charAt(i.length - 1) == ")") {
        if (i.length != 2) {
          if (i[1] == "-" || i[1] == "~") {
            counter++;
          }
        } else {
          counter++;
        }
      }
    }
  }
  return counter;
  /* One-liner for loop
  arr.reduce((count, face) => {
  return (eyes === ':' || eyes === ';') && (mouth === 'D' || mouth === ')') ? count + 1 : count;
    }
  */
}

console.log(countSmileys([":)", ";(", ";}", ":-D"])); // 2
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // 3
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // 1
console.log(countSmileys([":D", ":(", ";-D", ";D", ";>", ":oD", ";o)"])); // 3
console.log(countSmileys([":---)", "))", ";~~D", ";D"])); // 1
