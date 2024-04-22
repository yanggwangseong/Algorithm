const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...arr] = input;

let problemArray = Array.from(Array(n[0]), () => Array(n[1]).fill(""));

const d = [-1, 1]; // '-'일때는, 좌우로만 이동. '|'일때는, 위아래로 이동을 의미.

problemArray = arr.map((item) => item.split(""));

function solution(array) {
  const rows = array.length;
  const cols = array[0].length;
  const visited = Array.from(Array(rows), () => Array(cols).fill(false));

  let count = 0;

  function DFS(x, y, item) {
    visited[x][y] = true;

    if (item === "-") {
      for (let i = 0; i < 2; i++) {
        const nx = y + d[i]; //좌우로 이동
        if (nx > 0 && nx < cols && !visited[x][nx] && array[x][nx] === "-") {
          DFS(x, nx, item);
        }
      }
    } else {
      for (let j = 0; j < 2; j++) {
        const ny = x + d[j]; // 상하로 이동
        if (ny > 0 && ny < rows && !visited[ny][y] && array[ny][y] === "|") {
          DFS(ny, y, item);
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j]) {
        array[i][j] === "-" ? DFS(i, j, "-") : DFS(i, j, "|");
        count++;
      }
    }
  }

  return count;
}

console.log(solution(problemArray));