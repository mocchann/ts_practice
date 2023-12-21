const nested = {
  num: 123,
  obj: {
    foo: "hello",
    bar: "world"
  }
}

const {
  foo,
  bar
} = nested.obj;
console.log(bar);
