"use strict";

function getMiddle(s) {
  if (s.length % 2 == 0) {
    const half = Math.floor(s.length / 2);
    return s[half - 1] + s[half];
  } else {
    const half = Math.floor(s.length / 2);
    return s[half];
  }
}

console.log(getMiddle("test")); // es
console.log(getMiddle("testing")); // t
console.log(getMiddle("middle")); // dd
