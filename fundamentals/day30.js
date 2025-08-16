function expandedForm(num) {
  let str = "";
  for (let i = 10000; i >= 1; i /= 10) {
    if (!num % i) continue;
    if (num % i) {
      str += num % i;
    }
  }
  return str;
}

console.log(expandedForm(12)); // 10 + 2
console.log(expandedForm(45)); // 40 + 5
console.log(expandedForm(70304)); // 70000 + 300 + 4
