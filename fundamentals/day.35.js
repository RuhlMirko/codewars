function likes(names) {
  const arrLength = names.length;
  const isPlural = names.length > 2 ? "like" : "likes";
  if (!arrLength) return "no one likes this";
  if (arrLength <= 3) return names.join(" and ") + isPlural + " this";
  return `${names[0]}, ${names[1]} and ${arrLength - 2} others like this`;
}

console.log(likes([])); //"no one likes this"
console.log(likes(["Peter"])); //"Peter likes this"
console.log(likes(["Peter", "Jacob"])); //"Jacob and Alex like this"
console.log(likes(["Peter", "Jacob", "Alex"])); //"Max, John and Mark like this"
console.log(likes(["Peter", "Jacob", "Alex", "Max"])); //"Alex, Jacob and 2 others like this"
