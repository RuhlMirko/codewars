function dnaStrand(dna) {
  let complement = "";
  for (let i of dna) {
    switch (i) {
      case "T":
        complement += "A";
        break;

      case "A":
        complement += "T";
        break;

      case "C":
        complement += "G";
        break;

      case "G":
        complement += "C";
        break;

      default:
        break;
    }
  }
  return complement;
}

function improvedDnaStrand(dna) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return dna
    .split("")
    .map((n) => pairs[n])
    .join("");
}

console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));
console.log(improvedDnaStrand("ATTGC"));
console.log(improvedDnaStrand("GTAT"));
