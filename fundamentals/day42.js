function dirReduc(arr) {
  return arr.filter((direction, index) => {
    if (direction == "NORTH" && arr[index + 1] !== "SOUTH") {
      return direction;
    }
    if (
      (direction == "EAST" && arr[index + 1] !== "WEST") ||
      (direction == "WEST" && arr[index + 1] !== "EAST")
    ) {
      console.log(direction, arr[index + 1]);
      return direction;
    }
  });
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
); // WEST
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"],
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []
