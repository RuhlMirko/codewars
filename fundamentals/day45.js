function encrypt(text, n) {
  if (n <= 0 || !text) return text;

  let result = text;
  for (let i = 0; i < n; i++) {
    let odds = "",
      evens = "";
    for (let idx = 0; idx < result.length; idx++) {
      if (idx % 2) {
        odds += result[idx];
      } else {
        evens += result[idx];
      }
    }
    result = odds + evens;
  }
  return result;
}

function decrypt(encryptedText, n) {}

console.log(encrypt("This is a test!", 3)); //" Tah itse sits!"
console.log(encrypt("This is a test!", -1)); //, "This is a test!"
