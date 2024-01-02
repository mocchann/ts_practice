const r = /ab+c/;

console.log(r.test("abbbbc"));
console.log(r.test("Hello, abc world!"));
console.log(r.test("ABC"));
console.log(r.test("こんにちは"));
