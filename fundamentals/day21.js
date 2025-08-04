function countSheeps(sheep) {
  return sheep.reduce((acc, curr) => {
    if (curr) acc += 1;
    return acc;
  }, 0);
}
// Short version
// return array.reduce((acc, curr) => acc + (curr === true ? 1 : 0), 0);

const testArray = [
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
];

console.log(countSheeps(testArray));
// Result 17
