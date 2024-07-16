const filePath =
  process.platform === "linux" ? "/dev/stdin" : "8879/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// N 국가 수 K 등수를 알고 싶은 국가
const [N, K] = input.shift().split(" ").map(Number);

const map = input.map((item) => item.split(" ").map(Number));

// 내가 떠올린 아이디어 금 은 동 마다 점수를 주는거다.
const g = 3;
const s = 2;
const d = 1;

const result = [];
function solution() {
  map.forEach((element) => {
    const [a1, a2, a3, a4] = element;
    result.push(a2 * g + a3 * s + a4 * d);
  });
}
solution();
console.log(result[K - 1]);