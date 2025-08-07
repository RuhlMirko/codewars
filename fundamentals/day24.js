const oldBinaryArrayToNumber = (arr) => {
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

// You can convert a binary array to a number without using parseInt by iterating through the array
// and shifting/adding bits manually.

const binaryArrayToNumber = (arr) => {
  let num = 0;
  for (let bit of arr) {
    num = (num << 1) | bit;
  }
  return num;
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // 5
console.log(binaryArrayToNumber([0, 1, 1, 1])); // 7
console.log(binaryArrayToNumber([1, 0, 1, 1])); // 11
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
