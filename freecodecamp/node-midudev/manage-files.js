import { readFile, writeFile } from "node:fs/promises";

const content = await readFile("./archivo.txt", "utf-8");
console.log(content);

const upperContent = content.toUpperCase();
await writeFile("./archivo.txt", upperContent);
console.log(`Archivo con nuevo contenido: \n${upperContent}`);
