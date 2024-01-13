class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
}


const uhyo = new User("uhyo", 26);
const john = new User("john", 15);

console.log(uhyo.isAdult === john.isAdult);
