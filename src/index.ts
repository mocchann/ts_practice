const map: Map<string, number> = new Map().set("foo", 1234);
map.set("foo", 12345);

console.log(map.get("foo"));
console.log(map.get("bar"));
