const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const board = Array.from(Array(5), () => Array(5).fill(0));
const numbers = Array.from(Array(5), () => Array(5).fill(0));
const visited = Array.from(Array(5), () => Array(5).fill(false));

let call = 0;

for (let i = 0; i < 5; i++) {
  board[i] = input.shift().split(" ").map(Number);
}

for (let i = 0; i < 5; i++) {
  numbers[i] = input.shift().split(" ").map(Number);
}

function solution() {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      const now = numbers[i][j];
      board.map((v, idx) => {
        const index = v.indexOf(now);
        if (~index) {
          visited[idx][index] = true;
          call++;
        }
      });

      if (isBingo1() + isBingoCross() >= 3) {
        return call;
      }
    }
  }
}

function isBingo1() {
  let count = 0;
  for (let i = 0; i < visited.length; i++) {
    if (
      visited[i][0] &&
      visited[i][1] &&
      visited[i][2] &&
      visited[i][3] &&
      visited[i][4]
    ) {
      count++;
    }

    if (
      visited[0][i] &&
      visited[1][i] &&
      visited[2][i] &&
      visited[3][i] &&
      visited[4][i]
    ) {
      count++;
    }
  }

  return count;
}

function isBingoCross() {
  let count = 0;
  if (
    visited[0][0] &&
    visited[1][1] &&
    visited[2][2] &&
    visited[3][3] &&
    visited[4][4]
  ) {
    count++;
  }
  if (
    visited[4][0] &&
    visited[3][1] &&
    visited[2][2] &&
    visited[1][3] &&
    visited[0][4]
  ) {
    count++;
  }

  return count;
}

console.log(solution());