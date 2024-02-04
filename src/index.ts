import { readFile } from "fs";

console.log("1. read");
readFile("uhyo.txt", (data) => {
  console.log("3. readed");
})
console.log("2. read start");
