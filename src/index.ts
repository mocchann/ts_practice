type Animal = {
  species: string;
  age: string;
};

type Human = {
  name: string;
  age: number;
};

type User = Animal | Human;

const tama: User = {
  species: "FFFFF",
  age: "jalkjgai;jrfgo;iajg",
};

const uhyo: User = {
  name: "uhyo",
  age: 121,
};

function showAge(user: User) {
  const age = user.age;
  console.log(age);
}

showAge(uhyo);
