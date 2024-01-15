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

const cat1: Animal & string = "cat";

const cat2: Animal & string = {
  species: "FFFFF",
  age: 3
};
