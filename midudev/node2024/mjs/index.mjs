import { sum, mult, subdiv } from "./operations.js";

const [firstNum, secondNum] = [4, 5];
console.log(`Sum: ${sum(firstNum, secondNum)}
Multiplication: ${mult(firstNum, secondNum)}
Division: ${subdiv(firstNum, secondNum)}`);
