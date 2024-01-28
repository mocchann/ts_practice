type Option<T> = {
  tag: "exist";
  value: T;
} | {
  tag: "non";
};

function isExist<T>(obj: Option<T>): obj is { tag: "exist", value: T} {
  return obj.tag === "exist";
}

function checkProp(obj: Option<number>): void {
  if (isExist(obj)) {
    console.log(obj.value);
  }
}

const exist: Option<number> = {
  tag: "exist",
  value: 256,
};

const notExist: Option<number> = {
  tag: "non",
};

checkProp(exist);
checkProp(notExist);
