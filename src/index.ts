function map<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (const elm of array) {
    result.push(callback(elm));
  }
  return result;
}

const data = [1, -3, -2, 7, 0, -1];
const result: boolean[] = map<number, boolean>(data, (x) => x >= 0);
console.log(result);
