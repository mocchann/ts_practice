class User {
  name: string;
  protected age: number;
  private _isAdult: boolean;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this._isAdult = age >= 20;
  }

  public isAdult(): boolean {
    return this._isAdult;
  }
}

class PremiumUser extends User {

  public setAge(newAge: number) {
    this.age = newAge;
  }
}

const uhyo = new PremiumUser("uhyo", 26);
console.log(uhyo.isAdult());

uhyo.setAge(15);
console.log(uhyo);
console.log(uhyo.isAdult());
