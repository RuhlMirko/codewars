var number = (array) => array.map((item, index) => `${index + 1}: ${item}`);

console.log(number(["a", "b", "c"]));
