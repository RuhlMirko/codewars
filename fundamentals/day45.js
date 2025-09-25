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

function decrypt(encryptedText, n) {
  if (n <= 0 || !encryptedText) return encryptedText;
  let result = encryptedText;
  for (let i = 0; i < n; i++) {
    let mid = Math.floor(result.length / 2);
    let firstHalf = result.slice(0, mid);
    let secondHalf = result.slice(mid);
    let decrypted = "";
    for (let j = 0; j < secondHalf.length; j++) {
      decrypted += secondHalf[j];
      if (j < firstHalf.length) {
        decrypted += firstHalf[j];
      }
    }
    result = decrypted;
  }
  return result;
}

console.log(encrypt("This is a test!", 3)); //" Tah itse sits!"
console.log(encrypt("This is a test!", -1)); //, "This is a test!"
console.log(decrypt(" Tah itse sits!", 3));
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));
