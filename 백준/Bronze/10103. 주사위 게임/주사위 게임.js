const filePath =
  process.platform === "linux" ? "/dev/stdin" : "10103/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());

const map = input.map((item) => item.split(" ").map(Number));

let a = [];
let b = [];
for (const [x, y] of map) {
  if (x === y) continue;

  if (x > y) b.push(x);
  else if (x < y) a.push(y);
}

console.log(100 - a.reduce((prev, cur) => prev + cur, 0));
console.log(100 - b.reduce((prev, cur) => prev + cur, 0));