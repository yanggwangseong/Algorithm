const filePath =
  process.platform === "linux" ? "/dev/stdin" : "1026/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input.shift());

const A = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const B = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const result = A.reduce((prev, cur, index) => {
  return prev + parseInt(cur) * parseInt(B[index]);
}, 0);

console.log(result);