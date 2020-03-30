function f(num) {
  const x = Array(num)
    .fill(0)
    .map((e, i) => i + 1);
  const arr = x.filter((v, i) => (v % 15 ? v % 3 && v % 5 : v));
  return arr.length;
}

console.log(f(15));
