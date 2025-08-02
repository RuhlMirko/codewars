function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b > c && b + c > a && a + c > b) return true;
  return false;
}

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(4, 2, 3)); // true
console.log(isTriangle(7, 2, 2)); // false
console.log(isTriangle(1, 2, 3)); // false
console.log(isTriangle(-5, 1, 3)); // false
