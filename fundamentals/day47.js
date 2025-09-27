function solution(string) {
  let newStr = "";
  for (let i in string) {
    if (string[i] == string[i].toUpperCase()) {
      newStr += " " + string[i];
    } else newStr += string[i];
  }
  return newStr;
}

console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
