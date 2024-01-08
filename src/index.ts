type HasName = {
  name: string;
}
type HasNameAndAge = {
  name: string;
  age: number;
}

const showName = (obj: HasName) => {
  console.log(obj);
  console.log(obj.name);
  console.log(obj.age);
};
const g: (obj: HasNameAndAge) => void = showName;

g({
  name: "uhyo",
  age: 26,
});
