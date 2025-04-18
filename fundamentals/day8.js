function towerBuilder(nFloors) {
  const newStr = [];
  for (let i = 0; i < nFloors; i++) {
    let stars = i == 0 ? "*" : "*".repeat(2 * i + 1); // Number of stars for the current row
    let spaces =
      i == 0 ? " ".repeat(nFloors - i - 1) : " ".repeat(nFloors - i - 1); // Number of spaces before the stars to center them
    newStr.push(spaces + stars + spaces);
  }
  return newStr;
  /*One-liner
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
*/
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(6));
