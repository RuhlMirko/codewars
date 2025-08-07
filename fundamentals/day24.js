const binaryArrayToNumber = (arr) => {
  let counter = 0;
  for (let i in arr) {
    switch (i) {
      case "0":
        if (arr[i]) counter += 8;
        break;
      case "1":
        if (arr[i]) counter += 4;
        break;
      case "2":
        if (arr[i]) counter += 2;
        break;
      case "3":
        if (arr[i]) counter += 1;
        break;
    }
  }
  return counter;
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // 5
console.log(binaryArrayToNumber([0, 1, 1, 1])); // 7
console.log(binaryArrayToNumber([1, 0, 1, 1])); // 11
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
