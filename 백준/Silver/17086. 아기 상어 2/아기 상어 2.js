const filePath =
  process.platform === "linux" ? "/dev/stdin" : "17086/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const map = input.map((item) => item.split(" ").map(Number));
const visited = Array.from(Array(N), () => Array(M).fill(0));

const dx = [0, 0, -1, 1, -1, 1, -1, 1]; // 상하좌우대각선 8가지 경우
const dy = [1, -1, 0, 0, -1, -1, 1, 1]; // 상하좌우대각선 8가지 경우

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
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();

function BFS() {
  while (queue.size()) {
    const [x, y] = queue.dequeue();

    for (let k = 0; k < 8; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !map[nx][ny]) {
        map[nx][ny] = 1;
        visited[nx][ny] = visited[x][y] + 1;

        queue.enqueue([nx, ny]);
      }
    }
  }
}

// 킹상어가 있는곳의 좌표를 queue에 넣어준다.
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j]) queue.enqueue([i, j]);
  }
}

BFS();

console.log(Math.max(...visited.flat()));