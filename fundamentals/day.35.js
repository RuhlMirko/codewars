function likes(names) {
  let result = "";
  const isPlural = names.length > 1 ? "like" : "likes";
  if (!names.length) return `no one ${isPlural} this`;
  return result;
}

console.log(likes([])); //"no one likes this"
console.log(likes(["Peter"])); //"Peter likes this"
console.log(likes(["Peter", "Jacob"])); //"Jacob and Alex like this"
console.log(likes(["Peter", "Jacob", "Alex"])); //"Max, John and Mark like this"
console.log(likes(["Peter", "Jacob", "Alex", "Max"])); //"Alex, Jacob and 2 others like this"
