function getCount(str) {
  let matches = 0;
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  for (const char of str) {
    if (vowels.has(char)) {
      matches++;
    }
  }

  return matches;

  /*  One Liner:
  return (str.match(/[aeiou]/ig)||[]).length;
  */
}

console.log(getCount("abracadabra"));
