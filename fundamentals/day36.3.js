function oldMakeNegative(num) {
  return num > 0 ? num * -1 : num;
}

const makeNegative = (num) => (num > 0 ? num * -1 : num);

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));
