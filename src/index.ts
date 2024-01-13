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

  public filterOlder(users: readonly User[]): User[] {
    return users.filter(function(this: User, u) {
      return u.#age > this.#age;
    });
  }
}

const uhyo = new User("uhyo", 25);
const john = new User("john smith", 15);
const bob = new User("bob", 40);

const older = uhyo.filterOlder([john, bob]);
console.log(older);
