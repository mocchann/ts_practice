const sleepReject = (duration: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(reject, duration);
  })
}

sleepReject(3000).catch(() => {
  console.log("しっぱい");
});
