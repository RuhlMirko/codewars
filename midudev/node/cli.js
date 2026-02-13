import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const targetArgs = process.argv[2] ?? ".";

const formatBytes = (size) => {
  if (size < 1024) return `${size} b`;
  return `${(size / 1024).toFixed(2)} kB`;
};

const files = await readdir(targetArgs);
// console.log(files);

const entries = await Promise.all(
  files.map(async (name) => {
    const fullPath = join(targetArgs, name);
    const info = await stat(fullPath);

    return {
      name,
      isDir: info.isDirectory(),
      size: formatBytes(info.size),
    };
  }),
);

for (const entry of entries) {
  const icon = entry.isDir ? "📁" : "📋";
  const size = entry.isDir ? "-" : entry.size;
  console.log(`${icon} ${entry.name.padEnd(25)} ${size}`);
}
