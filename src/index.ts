type Obj = { foo?: number };

const obj2: Obj = { foo: -1234 };
// console.log(obj2);

// const { foo: bar = 500 } = obj2;
// console.log(bar);

obj2.foo !== undefined ? console.log(obj2.foo) : console.log(500);
