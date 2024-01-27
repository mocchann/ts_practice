function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === "string" || typeof value === "boolean";
}

const something: unknown = 123;

if (isStringOrNumber(something)) {
  console.log(something.toString());
}
