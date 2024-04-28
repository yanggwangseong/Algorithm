const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...arr] = input;

const [len, m] = n.split(" ");

const poket = Array.from({ length: len }).fill(0);

const result = arr.map((item) => item.split(" ").map(Number));

result.forEach((data, index) => {
  const [, j, k] = data;

  for (let i = data[0]; i <= j; i++) {
    poket[i - 1] = k;
  }
});

console.log(poket.join(" "));