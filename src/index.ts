import { readFile } from "fs";

readFile('../uhyo.txt', 'utf8', (err, file) => {
  console.log((file.match(/uhyo/g) || []).length);
});
