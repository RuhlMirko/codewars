function deleteNth(arr, n) {
  let result = [];
  let uniqueNums = [...new Set(arr)];

  uniqueNums.forEach((num) => {
    let eachRes = arr.filter((item) => item == num).slice(0, n);
    result.push(eachRes);
  });

  return result.flat();
}

// Better perfomance version
function limitOccurrences(arr, n) {
  const counts = {};
  const result = [];
  console.log("Inside for loop: ");
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] <= n) {
      result.push(num);
    }
  }

  return result;
}

console.log(deleteNth([20, 37, 20, 21], 1)); // 20,37,21
console.log(limitOccurrences([20, 37, 20, 21], 1)); // 20,37,21
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // 1, 1, 3, 3, 7, 2, 2, 2
console.log(limitOccurrences([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // 1, 1, 3, 3, 7, 2, 2, 2
console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1)); // 12, 39, 19
console.log(limitOccurrences([12, 39, 19, 39, 39, 19, 12], 1)); // 12, 39, 19
