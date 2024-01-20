const names = ["uhyo", "john", "taro"] as const;

type Name = (typeof names)[number];
