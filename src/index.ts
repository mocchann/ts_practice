import { readFile } from "fs/promises";

const p = readFile("fooo.txt", "utf8");

p.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log("失敗", err);
});
