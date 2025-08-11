// return [...iterable].filter((a, i) => a !== iterable[i-1])
var uniqueInOrder = function (iterable) {
  const uniqueItems = [];
  if (typeof iterable == "string") iterable = iterable.split("");
  for (let i in iterable) {
    i = Number(i);
    if (iterable[i] !== iterable[i + 1]) uniqueItems.push(iterable[i]);
  }

  return uniqueItems;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
