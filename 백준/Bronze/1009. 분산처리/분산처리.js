const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());

const arr = input.map((item) => item.split(" ").map(Number));

const answer = [];

arr.forEach((item) => {
  const [i, k] = item;

  let pow = 1;

  for (let j = 0; j < k; j++) {
    pow = (pow * i) % 10;
  }

  answer.push(pow === 0 ? 10 : pow);
});

console.log(answer.join("\n"));