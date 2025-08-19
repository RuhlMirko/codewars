function getMiddle(s) {
  const middleIndex = Math.floor(s.length / 2);
  return s.length % 2 ? s[middleIndex] : s[middleIndex - 1] + s[middleIndex];
  //   return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

console.log(getMiddle("test")); // es
console.log(getMiddle("testing")); // t
console.log(getMiddle("middle")); // dd
console.log(getMiddle("A")); // A
console.log(getMiddle("A".repeat(15) + "t".repeat(3) + "A".repeat(15))); // A
