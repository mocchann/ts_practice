for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}

function getFizzBuzzString(i: number): string {
  if (i % 3 === 0 && i % 5 === 0) {
    return `${i} FizzBuzz`;
  } else if (i % 3 === 0) {
    return `${i} Fizz`;
  } else if (i % 5 === 0) {
    return `${i} Buzz`;
  } else {
    return String(i);
  }
}

function sequence(startNum: number, endNum: number): number[] {
  let fizzBuzzArray: number[] = [];
  for (let i = startNum; i <= endNum; i++) {
    fizzBuzzArray.push(i);
  }
  return fizzBuzzArray;
}
