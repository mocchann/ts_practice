import { readFile } from "fs/promises";

const pFoo = readFile("foo.txt", "utf8");
const pBar = readFile("bar.txt", "utf8");
const pBaz = readFile("baz.txt", "utf8");

const p = Promise.all([pFoo, pBar, pBaz]);

p.then((result) => {
  console.log("foo.txt", result[0]);
  console.log("bar.txt", result[1]);
  console.log("baz.txt", result[2]);
});
