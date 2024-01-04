const sum = (base: number, ...args: number[]): number => {
  let result = base * 1000;
  for (const num of args) {
    result += num;
  }
  return result;
};

console.log(sum(1, 10, 100));
console.log(sum(123, 456));
console.log(sum());
