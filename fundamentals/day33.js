function incrementString(strng) {
  // return incrementedString
  const found = strng.match(/\d+$/);
  if (!found) return strng + 1;
  const foundNum = found[0];
  const foundIndex = found.index;
  const newNumber = parseInt(foundNum) + 1;

  return (
    strng.slice(0, foundIndex) +
    String(newNumber).padStart(foundNum.length, "0")
  );
}

function improvedIncrementString(input) {
  if (isNaN(parseInt(input[input.length - 1]))) return input + "1";
  return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

let shortIncrementString = (str) =>
  str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? String(+e + 1) : "1"));

console.log(incrementString("foo")); // foo1
console.log(incrementString("foo23")); // foo1
console.log(incrementString("foo0042")); // foo1
console.log(incrementString("fooll0042")); // foo1
console.log(shortIncrementString("fooll0042")); // foo1
