function useNever(value: never) {
  const num: number = value;
  const str: string = value;
  const obj: object = value;
  console.log(`value is ${value}`);
}

useNever({});

useNever(3.14);
