function twoSum(numbers, target) {
  let match = [];
  for (let i in numbers) {
    for (let j in numbers) {
      if (numbers[j] + numbers[i] == target) {
        if (i != j) {
          match = [i, j];
        }
      }
    }
  }
  return match;
}

/*
function twoSum(numbers, target) {
  const seen = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(numbers[i], i);
  }
}

*/

console.log(twoSum([1, 2, 3], 4)); // returns [0,2] or [2,0]
console.log(twoSum([3, 2, 4], 6)); // returns [1,2] or [2,1]
console.log(twoSum([1234, 5678, 9012], 14690)); // 2 1
console.log(twoSum([2, 2, 3], 4)); // 1 0

/*
Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; 
target will always be the sum of two different items from that array).
Based on: https://leetcode.com/problems/two-sum/
*/
