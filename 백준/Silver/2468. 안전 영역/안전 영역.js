const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());

const M = Math.min(100, N);

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    // 제일 앞에 있는 값 가져오기
    return this.queue[this.front];
  }

  size() {
    // 사이즈 가져오기
    return this.rear - this.front;
  }
}

const map = input.map((item) => item.split(" ").map(Number));
let anwer = [];

const queue = new Queue();

let max;
map.forEach((row) => {
  max = Math.max(...row);
});

//상하좌우
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

function BFS(start, target, visited) {
  queue.enqueue(start);

  let count = 0;

  while (queue.size()) {
    const [x, y] = queue.dequeue();

    count++;
    // 현재 좌표 기준 인접한 곳 탐색 반복문
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (
        ny >= 0 &&
        ny < N &&
        nx >= 0 &&
        nx < N &&
        map[nx][ny] > target &&
        visited[nx][ny] === false
      ) {
        visited[nx][ny] = true; // 방문처리
        queue.enqueue([nx, ny]);
      }
    }
  }

  return count;
}

for (let k = 0; k <= max; k++) {
  const visited = Array.from(Array(N), () => Array(N).fill(false));
  let result = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] > k && visited[i][j] === false) {
        visited[i][j] = true; // 방문하면 0으로 변경해버림
        result.push(BFS([i, j], k, visited));
      }
    }
  }

  anwer.push(result.length);
}

console.log(Math.max(...anwer));