import path from "node:path";

// console.log(path.sep); Muestra el tipo de barra que usa el os

const filePath = path.join("content", "subfolder", "target.txt");
console.log(filePath);
const fileNameFull = path.basename("/tmp/secret/password.txt");
const fileName = path.basename("/tmp/secret/password.txt", ".txt");
console.log(fileNameFull, fileName);

const extension = path.extname("image.jpg");
console.log(extension);
