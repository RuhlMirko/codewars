function smash(words) {
  let newStr = "";
  for (let i in words) {
    newStr += i == words.length - 1 ? words[i] : words[i] + " ";
  }
  return newStr;
}

console.log(smash(["hello", "world", "this", "is", "great"]));
