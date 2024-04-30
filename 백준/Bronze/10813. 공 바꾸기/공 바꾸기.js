const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...arr] = input;

const [len, m] = n.split(" ");

const poket = Array.from({ length: len })
  .fill()
  .map((item, index) => index + 1);

const result = arr.map((item) => item.split(" ").map(Number));

result.forEach((data, index) => {
  const [i, j] = data;
  [poket[i - 1], poket[j - 1]] = [poket[j - 1], poket[i - 1]];
});
console.log(poket.join(" "));