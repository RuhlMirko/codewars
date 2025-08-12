function DNAtoRNA(dna) {
  return dna
    .split("")
    .map(function (letter) {
      return letter == "T" ? (letter = "U") : letter;
    })
    .join("");
}

console.log(DNAtoRNA("GCAT")); // GCAU
console.log(DNAtoRNA("TTTT")); // UUUU
console.log(DNAtoRNA("GACCGCCGCC"));
