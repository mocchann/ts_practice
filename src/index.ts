type Option<T> = {
  tag: "exist";
  value: T;
} | {
  tag: "non";
};

function checkProp(obj: Option<number>): void {
  if (obj.tag === "non") {
    return;
  }
  console.log(obj.value);
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
