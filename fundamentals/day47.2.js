//   0   1   2  3   4  5  6  7  8
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//  -2 -1 -4 \ 4 3 5 6 \ 1 5 == Largest sum is 6
//            4 -1 2 1 \

var maxSequence = function (arr) {
  // Exceptions
  let hasPositive = arr.filter((e) => e >= 0);
  if (!arr.length || !hasPositive.length) return 0;
  // truthy values
  let sum = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (sum < arr[i]) sum = arr[i];
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 as stated above
console.log(maxSequence([])); // 0
console.log(maxSequence([-2, -3, -3, -4, -6, -5])); // 0
console.log(maxSequence([-6, 2, -4, 1, 3, -1, 5, -1])); // 8 [1,3,-1,5]
