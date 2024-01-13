import { getSystemErrorMap } from "util";

class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

class PremiumUser extends User {
  rank: number = 1;
}

function getMessage(u: User) {
  return `こんにちは、${u.name}さん`;
}

const john = new User("J", 15);
const uhyo = new PremiumUser("uhyo", 26);

console.log(getMessage(john));
console.log(getMessage(uhyo));
