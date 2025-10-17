const people = [
  { name: "Alice", age: 40 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 65 },
  { name: "Diana", age: 28 },
  { name: "Ethan", age: 52 },
];

const seniorsNames = people
  .filter((person) => person.age >= 40)
  .map((person) => person.name);

console.log(seniorsNames);
