/*
function countSheeps(sheep) {
  let counter = 0;
  for (let i in sheep) {
    if (sheep[i] == true) {
      counter++;
    }
  }
  return counter;
}
*/
function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}
console.log(countSheeps([])); // 0
console.log(countSheeps([undefined])); // 0
console.log(countSheeps([false])); // 0
console.log(countSheeps([null])); // 0
console.log(countSheeps([true])); // 1
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
); // 2
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
