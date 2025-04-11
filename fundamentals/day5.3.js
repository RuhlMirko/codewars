function abbrevName(name) {
  const splits = name.toUpperCase().split(" ");
  return splits[0][0] + "." + splits[1][0];
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrcik Feenan"));
console.log(abbrevName("Evan Cole Bateman"));
