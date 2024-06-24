const filePath =
  process.platform === "linux" ? "/dev/stdin" : "1463/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [X] = input.map(Number);
const DP = new Array(X + 1).fill(0); // input + 1 개수만큼 0으로 채워진 배열 생성

/**
 * 1은 이미 1이기 때문에 1을 제외한 2부터 for문을 실행
 */
for (let i = 2; i <= X; i++) {
  DP[i] = DP[i - 1] + 1;

  if (i % 2 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  }

  if (i % 3 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  }
}

console.log(DP[X]);