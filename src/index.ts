function toSeconds(hours: number, minutes: number, seconds: number): number {
  return
    hours * 3600
    + minutes * 60
    + seconds;
}

console.log(toSeconds(1, 60, 60));
