const filePath =
  process.platform === "linux" ? "/dev/stdin" : "2980/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, L] = input.shift().split(" ").map(Number);

const map = input.map((item) => item.split(" ").map(Number));

let time = 0;
let plusTime = 0;

map.map((item) => {
  time = item[0] + plusTime; // 거리 D + 이전 plusTime
  let tmp = time % (item[1] + item[2]); // time 나누기 (거리 + 빨간불 시간)의 나머지 시간

  if (tmp < item[1]) {
    // item[1] : 빨간불 , tmp: 신호등 위치까지 거리를 (3) % (빨간불(5) + 초록불(5)) = 0
    plusTime += item[1] - tmp;
  }
});

console.log(plusTime + L); // L 도착 시간은 무조건 들어갈 수 밖에 없다.