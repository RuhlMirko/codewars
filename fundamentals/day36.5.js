const outOfRange = [
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function printerError(s) {
  const matches = s.match(/[n-z]/gi);
  if (!matches) return `0/${s.length}`;
  return `${matches.length}/${s.length}`;
}

//One-liner
const newPrinterError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
); // 3/56
console.log(
  printerError("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
); // 6/60
console.log(
  printerError(
    "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"
  )
); // 11/65
console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm")
); // 0/53
