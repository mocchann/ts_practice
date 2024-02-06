import { readFile } from "fs/promises";

const p = Promise.all([
  readFile("foo.txt", "utf8"),
  readFile("bar.txt", "utf8"),
  readFile("baz.txt", "utf8"),
]);

p.then(([foo, bar, baz]) => {
  console.log("foo.txt", foo);
  console.log("bar.txt", bar);
  console.log("baz.txt", baz);
});
