const filePath =
  process.platform === "linux" ? "/dev/stdin" : "1427/example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const map = input
  .map((item) => item.split(""))
  .flat()
  .map(Number)
  .sort((a, b) => b - a);
console.log(map.join(""));
