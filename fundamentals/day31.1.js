function solution(str, ending) {
  if (!ending) return true;
  return ending == str.slice(-ending.length);
}

//  return str.endsWith(ending);

console.log(solution("abc", "bc"));
console.log(solution("abc", "d"));
console.log(solution("abcde", "abc"));
console.log(solution("abcde", ""));
