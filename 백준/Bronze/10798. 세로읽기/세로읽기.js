const filePath =
  process.platform === "linux" || "darwin" ? "/dev/stdin" : "10798/example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const str = input.map((item) => item.split(""));

const result = [];

const N = Math.max(str[0].length, 15); // 한 줄의 단어는 글자들을 빈칸 없이 연속으로 나열해서 최대 15개의 글자들로 이루어진다.
const M = str.length;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (str[j][i]) result.push(str[j][i]);
  }
}

console.log(result.join(""));