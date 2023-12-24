type Obj = { foo?: number | null };

const obj2: Obj = { foo: null };
console.log(obj2);

const { foo: bar = 500 } = obj2;
console.log(bar);
