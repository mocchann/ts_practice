type Obj = { foo?: number };
const obj1: Obj = {};
console.log(obj1.foo);

const obj2: Obj = { foo: -1234 };
console.log(obj2);

const { foo = 500 } = obj1;
console.log(foo);

const { foo: bar = 500 } = obj2;
console.log(bar);
