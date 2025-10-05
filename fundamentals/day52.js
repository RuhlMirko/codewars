function sumDigits(number) {
  let sum = 0;
  const strN = String(Math.abs(number));
  for (let i of strN) {
    sum += Number(i);
  }
  return sum;
}

console.log(sumDigits(10)); //1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5
