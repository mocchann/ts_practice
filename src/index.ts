type MysteryFunc =
  | ((str: string) => string)
  | string;

function useFunc(func: MysteryFunc) {
  const result = func("uhyo");
  console.log(result);
}
