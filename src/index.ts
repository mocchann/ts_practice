try {
  console.log("エラーを発生させる");
  throwError();
  console.log("エラーを発生させた");
} catch (err) {
  console.log("エラーをキャッチした");
  console.log(err);
}
console.log("おわり");

function throwError() {
  const error = new Error("エラーが発生！！！！！");
  throw error;
}
