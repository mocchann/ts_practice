const utils = {
    repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }
}

console.log(utils.repeat<string>("a", 5));
console.log(utils.repeat<boolean>(true, 3));
