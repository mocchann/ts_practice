import { readFile } from "fs/promises";

const p = readFile("uhyo.txt", "utf8");

p.then((result) => {
  console.log("成功", result);
});
p.catch((error) => {
  console.log("失敗", error);
});
