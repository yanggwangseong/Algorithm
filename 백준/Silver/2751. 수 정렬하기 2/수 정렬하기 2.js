const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
const arr = input.map((item) => +item);

console.log(arr.sort((a, b) => a - b).join("\n"));