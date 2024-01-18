type Animal = {
  tag: "animal";
  species: string;
}

type Human = {
  tag: "human";
  name: string;
}

type User = Animal | Human;

const tama: User = {
  tag: "animal",
  species: "fFFFFF",
};

const uhyo: User = {
  tag: "human",
  name: "uhyo",
};

const alien: User = {
  tag: "alien",
  name: "gray",
};
