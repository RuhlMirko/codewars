function nbYear(p0, percent, aug, p) {
  let currPop = p0;
  let years = 0;
  while (currPop < p) {
    currPop = Math.floor(((100 + percent) * currPop) / 100 + aug);
    years++;
  }
  return years;
}

console.log(nbYear(1500, 5, 100, 5000)); // 15 years
console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1000, 2.0, 50, 1214));
