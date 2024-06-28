const filePath =
  process.platform === "linux" ? "/dev/stdin" : "1547/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());

const map = input.map((item) => item.split(" ").map(Number));

const ba = Array.from(Array(4).fill(0));
ba[1] = 1;

for (let i = 0; i < N; i++) {
  const [j, k] = map[i];

  [ba[j], ba[k]] = [ba[k], ba[j]];
}

console.log(ba.indexOf(1));