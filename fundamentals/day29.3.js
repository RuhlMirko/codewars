function getDivisorsCnt(n) {
  let counter = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      counter += i === n / i ? 1 : 2;
    }
  }
  return counter;
}

console.log(getDivisorsCnt(4)); // 3
console.log(getDivisorsCnt(5)); // 2
console.log(getDivisorsCnt(12)); // 6
console.log(getDivisorsCnt(30)); // 8

// Iterating up to the square root of n is faster because:

// Every divisor above √n has a matching divisor below √n.
// For example, if n = 36, divisors come in pairs: (1,36), (2,18), (3,12), (4,9), (6,6).
// Once you reach i = 6 (which is √36), all larger divisors have already been found as pairs.

// You only need to check up to √n to find all divisor pairs.
// For each i where n % i === 0, both i and n/i are divisors.

// This reduces the number of iterations from n to about √n.
// For large n, this is a huge improvement in speed.

// Example:
// If n = 1,000,000,

// Looping from 1 to 1,000,000 = 1,000,000 checks
// Looping from 1 to 1,000 (√1,000,000) = only 1,000 checks
// Summary:
// Checking up to √n is much faster because you find all divisors in pairs, drastically reducing the number of checks needed.
