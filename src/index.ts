async function main() {
  const { readFile, writeFile } = await import("fs/promises");

  try {
    const fooContent = await readFile("foo.txt", "utf8");
    await writeFile("bar.txt", fooContent + fooContent);
    console.log("書き込み完了");
  } catch {
    console.error("書き込み失敗");
  }
}

main().then(() => {
  console.log("main成功");
})
