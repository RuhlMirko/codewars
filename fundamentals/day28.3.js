function order(words, wordsArr = words.split(" ")) {
  let returnStr = [];
  for (let i = 1; i <= wordsArr.length; i++) {
    wordsArr.forEach((word) => {
      if (word.includes(i)) {
        returnStr.push(word);
      }
    });
  }
  return returnStr.join(" ");
}

function newOrder(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ");
}

console.log(newOrder("is2 Thi1s T4est 3a"));
console.log(newOrder("4of Fo1r pe6ople g3ood th5e the2"));

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
