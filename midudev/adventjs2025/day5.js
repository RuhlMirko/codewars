/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  const nums = code.match(/\[(.*?)\]/g).map((match) => match.slice(1, -1));
  let decodedNum = "";
  for (let num in nums) {
    if (nums[num] === "<") decodedNum += nums[num - 1];
    // console.log(num);
  }
  console.log(decodedNum);
  return nums;
}

decodeSantaPin("[1++][2-][3+][<]");
// "3144"

decodeSantaPin("[9+][0-][4][<]");
// "0944"

decodeSantaPin("[1+][2-]");
// null (solo 2 dígitos)
