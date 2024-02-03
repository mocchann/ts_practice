import { Animal, tama } from "./animal.js";

const dog: Animal = {
  species: "CCCC",
  age: 1,
};

console.log(dog, tama);

const cat = tama;
cat.species = "aaa";

console.log(cat);
