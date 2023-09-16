let i:number = 1;

while(i <= 100) {
    switch (i <= 100) {
        case i % 3 ===0 && i % 5 ===0:
            process.stdout.write("FizzBuzz ");
            i++;
            break;
        case i % 5 === 0:
            process.stdout.write("Buzz ");
            i++;
            break;
        case i % 3 === 0:
            process.stdout.write("Fizz ");
            i++;
            break;
        default:
            process.stdout.write(String(`${i} `));
            i++;
            break;
    }
}
