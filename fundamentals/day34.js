const square = (num) => num ** 2;

console.log(square(3));

function between(a, b) {
  const newArr = [];
  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }
  return newArr;
}
console.log(between(1, 4));
