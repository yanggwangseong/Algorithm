const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...arr] = input;

const problem = arr.map(Number);

let [a, ...rest] = problem;

let count = 0;
let max = Math.max(...rest);
while (a <= max) {
  rest[rest.indexOf(max)] -= 1;
  a += 1;
  count++;
  max = Math.max(...rest);
}

console.log(count);