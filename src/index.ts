import { readFile } from "fs";

const startTime = performance.now();
readFile("uhyo.txt", "utf8", (err, result) => {
  const endTime = performance.now();
  console.log(`${endTime - startTime}ミリ秒かかった`);
});
console.log("読み込み開始");
