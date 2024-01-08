type U = (arg: number) => number;
type B = (left: number, right: number) => number;

const double: U = arg => arg * 2;
const add: B = (left, right) => left + right;

const bin: B = double;
console.log(bin(10, 100));
