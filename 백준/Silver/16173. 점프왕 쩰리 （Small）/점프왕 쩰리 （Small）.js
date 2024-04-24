const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...arr] = input;

const room = arr.map((item) => item.split(" ").map(Number));

function DFS(x, y) {
  const dist = room[x][y];

  // 도착한 경우
  if (dist === -1) {
    return true;
  }

  // 0이 적힌 칸
  if (!dist) {
    return false;
  }

  // 오른쪽 이동
  if (x + dist < n) {
    const result = DFS(x + dist, y);
    if (result) {
      return true;
    }
  }

  // 아래쪽 이동
  if (y + dist < n) {
    const result = DFS(x, y + dist);
    if (result) {
      return true;
    }
  }

  return false;
}

console.log(DFS(0, 0) ? "HaruHaru" : "Hing");