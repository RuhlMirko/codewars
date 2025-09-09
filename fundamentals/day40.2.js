function oldGrow(x) {
  let sum = 0;
  for (let i in x) {
    if (i == 0) sum = x[0];
    else sum *= x[i];
  }
  return sum;
}

// function grow(arr) {  return arr.reduce((acc, curr) => acc * curr, 1);}

const grow = (arr) => arr.reduce((acc, curr) => acc * curr, 1);

console.log(grow([1, 2, 3])); // 6
console.log(grow([4, 1, 1, 1, 4])); // 16
console.log(grow([2, 2, 2, 2, 2, 2])); // 64
