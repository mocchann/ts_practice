type Some<T> = {
  tag: "some";
  value: T;
}
type None = {
  tag: "none";
}

type Option<T> = Some<T> | None;

function mapOption<T, U>(obj: Option<T>, callback: (value: T) => U): Option<U> {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value)
      }
    case "none":
      return {
        tag: "none",
      }
  }
}

function dOption(obj: Option<number>) {
  return mapOption(obj, x => x * 2);
}
const four: Option<number> = { tag: "some", value: 4 };
const nothing: Option<number> = { tag: "none" };

console.log(dOption(four));
console.log(dOption(nothing));
