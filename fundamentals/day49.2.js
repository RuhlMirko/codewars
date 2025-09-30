const reverseSeq = (n) => {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

console.log(reverseSeq(5));
console.log(reverseSeq(10));
console.log(reverseSeq(7));
