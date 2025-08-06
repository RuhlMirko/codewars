const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "v",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function isPangram(string) {
  string = string.toLowerCase();
  for (let i of alphabet) {
    if (!string.includes(i)) return false;
  }
  return true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("This is not a pangram."));

console.log("New below:");

const strAlphabet = "abcdefghijklmnopqrstuvwxyz";
function betterIsPangram(string) {
  string = string.toLowerCase();
  return strAlphabet.split("").every(function (letter) {
    return string.includes(letter);
  });
}

console.log(betterIsPangram("The quick brown fox jumps over the lazy dog"));
console.log(betterIsPangram("This is not a pangram."));
