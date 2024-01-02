const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/);

if (result !== null) {
  console.log(result[0]);
  console.log(result[1]);
}
