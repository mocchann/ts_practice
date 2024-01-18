type Animal = {
  tag: "animal";
  species: string;
}

type Human = {
  tag: "human";
  name: string;
}

type User = Animal | Human;

function getUserName(user: User) {
  if (user.tag === "human") {
    return user.name;
  } else {
    return "no name";
  }
}

const tama: User = {
  tag: "animal",
  species: "fffffffff",
};

const uhyo: User = {
  tag: "human",
  name: "uhyo",
};

console.log(getUserName(tama));
console.log(getUserName(uhyo));
