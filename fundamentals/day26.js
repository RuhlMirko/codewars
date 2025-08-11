// return [...iterable].filter((a, i) => a !== iterable[i-1])
var uniqueInOrder = function (iterable) {
  const uniqueItems = [];
  for (let i = 0; i < [...iterable].length; i++) {
    if (iterable[i] !== iterable[i + 1]) uniqueItems.push(iterable[i]);
  }
  return uniqueItems;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
