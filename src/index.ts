function doNothing(val: unknown) {
  console.log(val);
  console.log(val.name);
}

doNothing(3);
doNothing({
  user: {
    name: "uhyo",
  },
});

doNothing(() => {
  console.log("hi");
});
