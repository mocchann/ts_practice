import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
console.log(filePath);
const fileDir = path.dirname(filePath);
console.log(fileDir);
const dataFile = path.join(fileDir, "../uhyo.txt");
console.log(dataFile);

const result = readFileSync(dataFile, { encoding: 'utf-8'});
console.log(result);
