function friend(friends) {
  const actualFriends = [];
  for (let i of friends) {
    if (i.length == 4) {
      actualFriends.push(i);
    }
  }
  return actualFriends;
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
