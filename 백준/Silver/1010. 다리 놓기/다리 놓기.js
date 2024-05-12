const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...arr] = input;

const leg = arr.map((item) => item.split(" ").map(Number));
let answer = [];
leg.forEach(([N, M]) => {
  let dp = Array.from(Array(30), () => Array(30).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = i; j <= M; j++) {
      // j 오른쪽 사이트는 i 왼쪽 사이트보다 작을 수 없기 때문에
      if (j === i) {
        dp[i][j] = 1; // 같을때 무조건 경우의수는 한번뿐
      } else if (i === 1) {
        dp[i][j] = j; //i가 1일때는 경우의 수는 당연히 j번
      } else {
        let tmp = 0;
        for (let k = 1; k < j; k++) {
          tmp += dp[i - 1][k];
        }
        dp[i][j] = tmp;
        // if (i === 2 && j === 3) console.log(dp[i][j]);
      }
    }
  }
  answer.push(dp[N][M]);
});

console.log(answer.join("\n"));