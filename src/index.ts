setTimeout(() => {
  console.log("タイマー呼び出し");
}, 100);

const startTime = performance.now();
let count = 0;
while (performance.now() - startTime < 1000) {
  count++;
}
console.log(count);
