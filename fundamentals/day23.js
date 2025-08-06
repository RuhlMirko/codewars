function stray(numbers) {
  let uniqueNums = [...new Set(numbers)];
  for (const value of uniqueNums) {
    if (numbers.filter((num) => num == value).length == 1) return value;
  }
}

// Find the odd one out
console.log(stray([1, 1, 2])); //2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); //3
console.log(stray([2, 1, 1])); //2
