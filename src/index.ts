type Animal = {
  species: string;
  age: number;
}

type Human = Animal & {
  name: string;
}

const tama: Animal = {
  species: "Felis silvestris catus",
  age: 3,
};

const uhyo: Human = {
  species: "Homo sapiens",
  age: 26,
  name: "uhyo",
};

type StringAndNumber = string & number;
