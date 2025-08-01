function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

function newRepeatStr(n, s) {
  //   return Array(n + 1).join(s);
  return s.repeat(n);
}

console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));
console.log(newRepeatStr(6, "I"));
console.log(newRepeatStr(5, "Hello"));
