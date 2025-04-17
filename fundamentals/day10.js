function check(a, x) {
  let found = false;
  for (let i of a) {
    if (i == x) {
      found = true;
    }
  }
  return found;
}

console.log(check([66, 100], 66)); // true
console.log(check([101, 45, 75, 105, 99, 107], 107)); // true
console.log(check(["t", "e", "s", "t"], "e")); // true
console.log(check(["t", "e", "s", "kata"], "kat")); // False
