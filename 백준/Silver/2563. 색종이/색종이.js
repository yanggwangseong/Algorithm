const filePath =
  process.platform === "linux" ? "/dev/stdin" : "2563/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());

// 첫번째 왼쪽 에서 부터 떨어진거리
// 두번째 아래쪽에서부터 떨어진거리
// 그 거리에서 10크기니까 +10으로 크기를 구하면 되고
// 이건 2차원 배열은 만든다음에 겹치는 부분은 넘어가야 될것 같다

const map = input.map((item) => item.split(" ").map(Number));

// 3 ~ 13
// 7 ~ 17
let max = 0;
map.forEach((item) => {
  const [x, y] = item;
  max = Math.max(max, x, y);
});

// 가로 세로의 최대 크기가 100이다
if (max > 100) max = 100;

//const site = Array.from(Array(max + 1), () => Array(max + 1).fill(0));

const result = [];

map.forEach((element) => {
  const [x, y] = element;
  const nx = x + 10;
  const ny = y + 10;
  for (let i = x; i < nx; i++) {
    for (let j = y; j < ny; j++) {
      if (i > 100 || j > 100) continue;
      //site[i][j] = 1;

      result.push(JSON.stringify([i, j]));
    }
  }
});

// const result = site.reduce((prv, cur) => {
//   return prv + cur.reduce((prev, cur) => prev + cur, 0);
// }, 0);

// console.log(result);

console.log(new Set(result).size);