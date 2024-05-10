const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input.join();

function solve(n) {
  let dy = Array.from({ length: n + 1 }, () => 0);

  dy[1] = 1; // SK 상근승
  dy[2] = 0; // CY 창영승
  dy[3] = 1; // SK 상근승

  for (let i = 4; i <= n; i++) {
    if ((dy[i - 1] & dy[i - 3]) === 1) {
      // 돌은 1개, 3개를 들고 갈 수 있으므로 i개의 돌이 있을 때 결과를 구하려면 i개 -1개, -3개의 결과 상근이가 둘다 이겼다면 dy[i]는 창영승
      dy[i] = 0; // CY 창영승
    } else {
      // 그게 아닌경우에 상근승
      dy[i] = 1; // SK 상근승
    }
  }

  return dy[n] === 1 ? "SK" : "CY";
}

console.log(solve(+n));