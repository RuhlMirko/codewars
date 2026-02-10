import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, basename, extname } from "node:path";

/* ------------ PERMISSION TO WORK ON FILES WITH TERMINAL ------------
node --permission --allow-fs-read="./file.txt" app.js
node --premission --allow-fs-read="./file2.txt" --allow-fs-write="./output/*" app.js
*/

if (process.permission.has("fs.read", "archivo.txt")) {
  const content = await readFile("./archivo.txt", "utf-8");
  console.log(content);
  const upperContent = content.toUpperCase();
  const outputFilePath = join(outputDir, "archivo.txt");
  console.log("Extension:", extname(outputFilePath));
  console.log("Nombre archivo:", basename(outputFilePath));
  await writeFile(outputFilePath, upperContent);
  console.log(`Archivo con nuevo contenido: \n${upperContent}`);
} else {
  console.log("Access denied for file reading");
}

if (process.permission.has("fs.write", "output/files/docs")) {
  const outputDir = join("output", "files", "docs");
  await mkdir(outputDir, { recursive: true });
} else {
  console.log("Access denied for directory manipulation");
}
