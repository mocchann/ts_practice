type Animal = {
  species: string;
};

type Human = {
  name: string;
};

type User = Animal | Human;

const tama: User = {
  species: "Felis silverstris catus"
}

const uhyo: User = {
  name: "string"
};

const book: User = {
  title: "Software Design"
};
