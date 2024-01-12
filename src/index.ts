class User {
  name: string = "";
  age: number = 0;
}

const uhyo = new User();

console.log(uhyo instanceof User);

console.log({} instanceof User);

const john: User = {
  name: "John Smith",
  age: 15,
};

console.log(john instanceof User);
