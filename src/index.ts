type Human = {
  type: "human";
  name: string;
  age: number;
};

function setAge(human: Human, age: Human["age"]) {
  return {
    ...human,
    age,
  };
}

const uhyo: Human = {
  type: "human",
  name: "uhyo",
  age: 26,
};

const uhyo2 = setAge(uhyo, 26);
console.log(uhyo2);
