// f("junyiacademy") == "ymedacaiynuj"
// f("flipped class room is important") == "deppilf ssalc moor si tnatropmi"

function f(v) {
  const arr = v.split(" ");
  return arr.map((val, idx) =>
    val
      .split("")
      .reverse()
      .join("")
  );
}

console.log(f("junyiacademy"));
console.log(f("flipped class room is important"))
