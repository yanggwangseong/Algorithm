const filePath =
  process.platform === "linux" ? "/dev/stdin" : "9095/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input.shift();
const map = input.map(Number);

/**
 * 문제에서 입력 조건 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다. n은 양수이며 11보다 작다.
 */

const dp = [];
dp[1] = 1;
dp[2] = 2; // 1+1, 2
dp[3] = 4; // 1+1+1, 1+2, 2+1, 3

for (let i = 4; i <= Math.max(...input); i++) {
  // 가장 큰수를 기준으로 미리 dp배열에 해당하는 숫자의 값들을 루프로 구한다.
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

map.forEach((data) => {
  console.log(dp[data]);
});