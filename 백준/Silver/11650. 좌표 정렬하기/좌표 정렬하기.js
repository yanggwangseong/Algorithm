const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const array = input.map((item) => item.split(" ").map((num) => parseInt(num)));
console.log(
  array
    .sort((a, b) => {
      return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    })
    .map((item) => item.join(" "))
    .join("\n")
);