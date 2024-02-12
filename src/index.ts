async function fail() {
  throw new Error("oh my god!");
}

const f = fail();
f.catch((err) => {
  console.log(err);
});
