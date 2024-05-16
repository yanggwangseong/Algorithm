const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n] = input.map(Number);

let answer = [];
const numbers = Array.from({ length: n })
  .fill()
  .map((item, index) => index + 1);

while (numbers.length !== 1) {
  const acmicpc = numbers.shift();
  answer.push(acmicpc);

  const two = numbers.shift();
  numbers.push(two);
}
answer = [...answer, ...numbers];

console.log(answer.join(" "));