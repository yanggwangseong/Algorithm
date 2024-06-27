const filePath =
  process.platform === "linux" ? "/dev/stdin" : "2839/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let answer = 0;
let N = parseInt(input[0]);

function solution() {
  while (N > 0) {
    if (N % 5 === 0) {
      N -= 5;
    } else {
      N -= 3;
    }
    answer += 1;
  }

  return N === 0 ? answer : -1;
}

console.log(solution());