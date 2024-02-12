import { readFile, writeFile } from "fs/promises"

const main = async () => {
  const fooContent = await readFile("foo.txt", "utf8");
  await writeFile("bar.txt", fooContent + fooContent);
  console.log("書き込み完了");
}
