function doWhatever(obj: any) {
  console.log(obj.user.name);
  obj();
  const result = obj * 10;
  return result;
}

doWhatever(3);

doWhatever({
  user: {
    name: "uhyo"
  }
});

doWhatever(() => {
  console.log("hj");
});
