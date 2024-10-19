
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function LIS(n) {
  // Base case: 이미 계산된 값이 있으면 반환
  if (dp[n] !== -1) {
    return dp[n];
  }

  // Recursive case: n 이전의 수들과 비교하며 최대 길이 갱신
  let best = 0;
  for (let i = 0; i < n; i++) {
    if (arr[n] > arr[i]) {
      best = Math.max(best, LIS(i));
    }
  }

  // 현재 위치의 최장 부분 수열 길이 저장
  dp[n] = best + 1;
  return dp[n];
}

const N = parseInt(input.shift());
const arr = input[0].split(" ").map(Number); // 두 번째 줄에서 배열 읽기

// dp 배열 초기화 (길이 N+1, 모든 값은 -1로 설정)
const dp = new Array(N).fill(-1);

// 초기값 설정
dp[0] = 1;

// dp[1] ~ dp[N]까지 구하기
for (let i = 1; i <= N; i++) {
  LIS(i);
}

console.log(Math.max(...dp));
