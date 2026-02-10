import { readFile, writeFile, mkdir } from "node:fs/promises";

const content = await readFile("./archivo.txt", "utf-8");
console.log(content);

const outputDir = "output/files/docs";
await mkdir(outputDir, { recursive: true });

const upperContent = content.toUpperCase();
await writeFile(`./${outputDir}/archivo.txt`, upperContent);
console.log(`Archivo con nuevo contenido: \n${upperContent}`);
