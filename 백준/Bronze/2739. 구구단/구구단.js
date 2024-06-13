const filePath =
  process.platform === "linux" ? "/dev/stdin" : "2739/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number)[0];

for (let i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}