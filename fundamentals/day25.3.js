

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
    const strArr = this.split(" ")
    let newArr = []
    for(let i of strArr){
        newArr.push(i[0].toUpperCase() + i.slice(1)) 
    }
    
     return newArr.join(" ");
     /* Shorter version
     return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
     */
   }
  }
);

console.log("How can mirrors be real if our eyes aren't real".toJadenCase()); // "How can mirrors be real if our eyes aren't real"
console.log("This is a test string".toJadenCase()); // "This is a test string"
console.log("Another example here".toJadenCase()); // "Another example here"