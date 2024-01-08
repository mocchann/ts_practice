function repeat<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}

type HasNameAndAge = {
  name: string;
  age: number;
}

const result = repeat("a", 5);
console.log(result);
