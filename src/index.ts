const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right];

const p = pair<string, number>("uhyo", 26);

console.log(p)