async function get3(): Promise<number> {
  console.log("呼び出された");
  return 3;
}

console.log("呼び出す");
const p = get3();
p.then(num => {
  console.log(num);
})
console.log("呼び出した");
