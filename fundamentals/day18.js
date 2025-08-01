function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) return 0;
  const [maxNum, minNum] = [Math.max(...array), Math.min(...array)];
  return array.reduce((a, b) => a + b, 0) - maxNum - minNum;
}

// One-liner versions
// const sumArray = array => array && array.length > 2 ? array.reduce((a, b) => a + b, 0) - Math.max(...array) - Math.min(...array) : 0;
// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

//
//{ 6, 2, 1, 8, 10 } => 16 (6+8+2)
console.log(sumArray([6, 2, 1, 8, 10]));
//{ 1, 1, 11, 2, 3 } => 6 (1+2+3)
console.log(sumArray([1, 1, 11, 2, 3]));
//{ 0,1,6,10,10} => 17 (1+6+10)
console.log(sumArray([0, 1, 6, 10, 10]));
//{ -6,-20,-1,-10,-12} => -28 (6-10-12)
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([1]));
