try {
  console.log("エラーを発生させる");
  throwError();
  console.log("エラーを発生させた");
} finally {
  console.log("finallyブロック");
}
console.log("try分の後ろ");

function throwError() {
  throw new Error("エラーが発生!!!");
}
