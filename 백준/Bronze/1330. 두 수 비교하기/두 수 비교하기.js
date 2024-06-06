const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [A, B] = input.map((item) => item.split(" ").map(Number)).flat();

console.log(A === B ? "==" : A > B ? ">" : "<");