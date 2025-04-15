function towerBuilder(nFloors) {
  const newStr = [];
  for (let i = 0; i < nFloors; i++) {
    let stars = i == 0 ? "*" : "*".repeat(2 * i + 1); // Number of stars for the current row
    let spaces = " ".repeat(nFloors - i - 1); // Number of spaces before the stars to center them
    newStr.push(spaces + stars);
  }
  return newStr.join("\n");
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(6));
