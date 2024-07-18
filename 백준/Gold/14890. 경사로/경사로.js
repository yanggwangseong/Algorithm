const filePath =
  process.platform === "linux" ? "/dev/stdin" : "14890/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, L] = input.shift().split(" ").map(Number);

const map = input.map((item) => item.split(" ").map(Number));

let newBoard = Array.from(Array(N), () => Array(N));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    newBoard[j][i] = map[i][j];
  }
}

function check(arr) {
  let answer = 0;

  for (let i = 0; i < N; i++) {
    const now = arr[i];
    let possible = 1;
    for (let j = 1; j < N; j++) {
      if (now[j - 1] == now[j]) possible++;
      else if (now[j - 1] + 1 == now[j] && possible >= L) possible = 1;
      else if (now[j - 1] == now[j] + 1 && possible >= 0) possible = 1 - L;
      else {
        possible = -1;
        break;
      }
    }
    if (possible >= 0) {
      answer++;
    }
  }
  return answer;
}

console.log(check(map) + check(newBoard));