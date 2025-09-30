const reverseSeq = (n) => {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

const anotherReverseSeq = (n) =>
  Array(n)
    .fill(0)
    .map((_, i) => n - i);

console.log(reverseSeq(5));
console.log(anotherReverseSeq(7));
