function error(): never {
  throw new Error("err!");
}

const result: never = error();

const str: string = result;
console.log(str);
