type Fruit = "apple" | "orange" | "strawberry";

type FruitNumbers = {
  [P in Fruit]: P[]
};

const numbers: FruitNumbers = {
  apple: ["apple", "apple"],
  orange: ["orange", "orange", "orange"],
  strawberry: [],
};
