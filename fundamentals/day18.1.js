// function comp(array1, array2) {
//   const isNotArray = !Array.isArray(array1) || !Array.isArray(array2);
//   if (isNotArray) return false;
//   const isNotLongEnough = array1.length <= 2 || array2.length <= 2;
//   if (isNotLongEnough) return false;
//   let matches = 0;
//   for (let i of array1) {
//     const sqNum = i * i;
//     if (array2.includes(sqNum)) {
//       matches++;
//     }
//   }
//   if (matches == array1.length) {
//     return true;
//   }
// }

function comp(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  if (array1.length !== array2.length) return false;

  const sorted1 = array1.map((x) => x * x).sort((a, b) => a - b);
  const sorted2 = array2.slice().sort((a, b) => a - b);

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) return false;
  }
  return true;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);

console.log(comp([], null));
console.log(comp(undefined, null));
