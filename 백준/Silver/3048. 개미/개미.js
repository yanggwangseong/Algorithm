const filePath =
  process.platform === "linux" ? "/dev/stdin" : "3048/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

/**
 * T = 1
 * C B A D E F
 * 1 1 1 2 2 2
 *     i i+1
 *
 * C B D A E F
 *
 */

const [N, M] = input.shift().split(" ").map(Number);
let T = parseInt(input.pop());
const result = input.map((item) => item.split(""));

const N1 = result[0].reverse();
const N2 = result[1];
const ants = Array.from({ length: N + M });
const dt = Array.from({ length: N + M });

for (let i = 0; i < N; i++) {
  ants[i] = N1[i];
  dt[i] = 1;
}

for (let i = 0; i < M; i++) {
  ants[i + N] = N2[i];
  dt[i + N] = 2;
}

while (T > 0) {
  for (let i = 0; i < ants.length; i++) {
    if (dt[i] === 1 && dt[i + 1] === 2) {
      [ants[i], ants[i + 1]] = [ants[i + 1], ants[i]];
      [dt[i], dt[i + 1]] = [dt[i + 1], dt[i]];
      i++; // dt가 1과 2였을때 둘이 바꿔줬는데 바꾸자마자 다음 루프때 1과 2이기 때문에 i++ 중복 제거
    }
  }
  T--;
}

console.log(ants.join(""));