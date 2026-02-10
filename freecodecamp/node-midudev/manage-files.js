import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, basename, extname } from "node:path";

const content = await readFile("./archivo.txt", "utf-8");
console.log(content);

const outputDir = join("output", "files", "docs");
await mkdir(outputDir, { recursive: true });

const upperContent = content.toUpperCase();
const outputFilePath = join(outputDir, "archivo.txt");
console.log("Extension:", extname(outputFilePath));
console.log("Nombre archivo:", basename(outputFilePath));
await writeFile(outputFilePath, upperContent);
console.log(`Archivo con nuevo contenido: \n${upperContent}`);
