const filePath =
  process.platform === "linux" ? "/dev/stdin" : "1541/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const numbers = input
  .join("")
  .split("-")
  .map((data) =>
    data
      .split("+")
      .map(Number)
      .reduce((prev, cur) => prev + cur, 0)
  )
  .reduce((a, b) => a - b);

console.log(numbers);
