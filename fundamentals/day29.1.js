function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(1)); //0
console.log(litres(2)); //1
console.log(litres(3)); //1
console.log(litres(4)); //2
console.log(litres(12.3)); //6
