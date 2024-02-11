import("fs/promises")
  .then(({ readFile }) =>
    readFile("fooo.txt", "utf8")
  )
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("エラー", error);
  })
