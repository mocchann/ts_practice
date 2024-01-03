function helloWorldNTimes(n: number): void {
  if (n >= 100) {
    console.log(`${n}回なんて無理です！`);
    return;
  }
  for (let i=0; i < n; i++) {
    console.log("Hello World!");
  }
}

helloWorldNTimes(10);
helloWorldNTimes(1000);
