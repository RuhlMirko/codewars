function solution(string) {
  let newStr = "";
  for (let i in string) {
    if (string[i] == string[i].toUpperCase()) {
      newStr += " " + string[i];
    } else newStr += string[i];
  }
  return newStr;
}

const regexSolution = (string) => string.replace(/([A-Z])/g, " $1");

//return(string.replace(/([A-Z])/g, ' $1'));
console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
console.log(regexSolution("camelCasing"));
console.log(regexSolution("camelCasingTest"));
