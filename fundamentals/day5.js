function minMax(arr) {
  /*
    for (let i in arr) {
    if (i == 0) {
      var maxValue = arr[i];
      var minValue = arr[i];
    } else {
      if (arr[i] >= maxValue) {
        maxValue = arr[i];
      }
      if (arr[i] <= minValue) {
        minValue = arr[i];
      }
    }
  }
  return [minValue, maxValue]; // fix me!
  */
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([23334454, 5]));
console.log(minMax([1]));
