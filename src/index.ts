async function main() {
  const { readFile, writeFile } = await import("fs/promises");

  const fooContent = await readFile("foo.txt", "utf8");

  await writeFile("bar.txt", fooContent + fooContent);
  console.log("書き込み完了");
}

main().then(() => {
  console.log("mainが完了した");
})
