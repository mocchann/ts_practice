function useUnknown(val: unknown) {
  if (typeof val === "string") {
    console.log("val is string");
    console.log(val.slice(0, 5));
  } else {
    console.log("val is a few string");
    console.log(val);
  }
}

useUnknown("foobar");
useUnknown(null);
