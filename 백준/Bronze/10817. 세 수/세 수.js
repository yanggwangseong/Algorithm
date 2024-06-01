const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(
  input
    .map((item) =>
      item
        .split(" ")
        .map(Number)
        .sort((a, b) => b - a)
    )
    .flat()[1]
);