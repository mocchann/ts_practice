type User = {
  name: string,
  age: number,
  premiumUser: boolean
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const newData = data.split("\n").filter((rowData) => rowData !== '');
const users = [
  {
    name: newData[0].split(",")[0],
    age: newData[0].split(",")[1],
    premiumUser: newData[0].split(",")[2],
  },
  {
    name: newData[1].split(",")[0],
    age: newData[1].split(",")[1],
    premiumUser: newData[1].split(",")[2],
  },
  {
    name: newData[2].split(",")[0],
    age: newData[2].split(",")[1],
    premiumUser: newData[2].split(",")[2],
  },
];

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
  }
}
