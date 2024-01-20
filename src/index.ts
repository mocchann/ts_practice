type Animal = {
  tag: "animal";
  species: string;
};
type Human = {
  tag: "human";
  name: string;
};

type User = Human | Animal;

function getNamesIfAllHuman(users: readonly User[]): string[] | undefined {
  if (users.every(user => user.tag === "human")) {
    // everyでHuman[]への絞り込みを行ったがコンパイラが認識しない、かつ、この処理のあとにusersにAnimalをpushすることもないためasでHuman[]を指定している
    return (users as Human[]).map(user => user.name);
  }
  return undefined;
}
