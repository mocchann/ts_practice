const obj = {
  foo: 123,
  bar: "string",
  baz: false,
};

const { foo, ...restObj } = obj;

console.log(foo);
console.log(restObj);
