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
    return (users as Human[]).map(user => user.name);
  }
  return undefined;
}
