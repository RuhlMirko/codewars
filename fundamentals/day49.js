function saleHotdogs(n) {
  //   if (n < 5) return n * 100;
  //   else if (n >= 5 && n < 10) return n * 95;
  //   else return n * 90;
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}

console.log(saleHotdogs(1));
console.log(saleHotdogs(4));
console.log(saleHotdogs(5));
console.log(saleHotdogs(9));
console.log(saleHotdogs(10));
console.log(saleHotdogs(100));
