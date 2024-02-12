const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

async function get3() {
  console.log("呼び出された");
  await sleep(1000);
  console.log("次の処理に進む");
  return 3;
}

console.log("呼び出す");
const p = get3();
p.then(num => {
  console.log(num);
});
console.log("呼び出した");
