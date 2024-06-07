const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.pop(); // 마지막에 무조건 0 0

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
    // 제일 앞에 있는 값 가져오기
    return this.queue[this.front];
  }

  size() {
    // 사이즈 가져오기
    return this.rear - this.front;
  }
}

const answer = [];

function BFS(start, N, M, map) {
  const queue = new Queue();
  queue.enqueue(start);
  let cnt = 0;

  while (queue.size()) {
    const [x, y] = queue.dequeue();
    cnt++;
    for (let k = 0; k < 8; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (ny >= 0 && ny < M && nx >= 0 && nx < N && map[nx][ny]) {
        map[nx][ny] = 0; // 방문처리
        queue.enqueue([nx, ny]);
      }
    }
  }

  return cnt;
}

while (input.length) {
  let map = [];
  const result = [];
  const [M, N] = input.shift().split(" ").map(Number);

  for (let i = 0; i < N; i++) {
    map.push(input.shift().split(" ").map(Number));
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1) {
        map[i][j] = 0;
        result.push(BFS([i, j], N, M, map));
      }
    }
  }

  answer.push(result.length);
}

console.log(answer.join("\n"));