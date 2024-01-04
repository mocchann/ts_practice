const toLowerOrUpper = (str?: string, upper: boolean = false): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}

console.log(toLowerOrUpper("Hello", undefined));
console.log(toLowerOrUpper("Hello", false));
console.log(toLowerOrUpper("Hello", true));
