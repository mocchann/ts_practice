import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('数値打てyo', (line) => {
    const num = Number(line);
    const message = 0 <= num && num < 100
        ? `${num}は0以上100未満だzo`
        : `${num}は0以上100未満ではないzo`;
    console.log(message);
});
