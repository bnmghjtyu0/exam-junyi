let bags = [
  {
    name: "bag1",
    content: ["pen"]
  },
  {
    name: "bag2",
    content: ["bluepen"]
  },
  {
    name: "bag3",
    content: ["bluepen", "pen"]
  }
];
function f(pen, bagLength) {
  bags.map((bag, idx) => {
    if (bag.content.includes(pen)) {
      if (bag.content.length === bagLength) {
        console.log(`拿到袋子 ${bag.name}`);
      }
    }
  });
}

// f("pen", 1); 拿到袋子1
// f("pen", 2); 拿到袋子3
// f("bluepen", 1); 拿到袋子2
// f("bluepen", 2); 拿到袋子3
