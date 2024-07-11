const filePath =
  process.platform === "linux" ? "/dev/stdin" : "11720/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());

console.log(
  input
    .map((item) => item.split("").map(Number))
    .flat()
    .reduce((prev, cur) => prev + cur, 0)
);
