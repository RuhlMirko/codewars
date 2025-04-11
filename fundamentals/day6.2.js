function descendingOrder(n) {
  /*
    const numArr = n
    .toString()
    .split("")
    .map((e) => Number(e))
    .sort()
    .reverse();
    */
  return Number(
    [...String(n)]
      .map(Number)
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(descendingOrder(112)); /// 211
console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321
