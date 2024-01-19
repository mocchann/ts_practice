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
  switch (user.tag) {
    case "human":
      return user.name;
    case "animal":
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
