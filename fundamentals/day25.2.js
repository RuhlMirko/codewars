function reverseWords(str) {
  const strArr = str.split(" ")
  const retArr = []
    for(let i of strArr){
        retArr.push(i.split("").reverse().join("")) 
    }
    return retArr.join(" ")
}

console.log(reverseWords("This is an example!"))
console.log(reverseWords("double  spaces"))