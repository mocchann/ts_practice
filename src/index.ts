class User {
  name?: string;
  age: number = 0;
}

const obj = {
  cl: User
};

const uhyo = new obj.cl();
console.log(uhyo.name);
console.log(uhyo.age);
