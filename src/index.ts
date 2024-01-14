type getMessage = {
  (message: string): string
}

function createUser(name: string, age: number): getMessage {
  if (name === "") {
    throw new Error("名前はからにできない");
  }
  return (message: string): string  => `${name} (${age}) 「${message}」`;
}

const getMessage = createUser("uhyo", 26);
// "uhyo(26)「こんにちは」"と表示される
console.log(getMessage("こんにちは"));
console.log(getMessage(""));
