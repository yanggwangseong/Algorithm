const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

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

const dx = [0, 0, -1, 1, -1, 1, -1, 1]; // 상하좌우대각선 8가지 경우
const dy = [1, -1, 0, 0, -1, -1, 1, 1]; // 상하좌우대각선 8가지 경우

const map = input.map((item) => item.split(" ").map(Number));

const anwer = [];

function BFS(start) {
  const queue = new Queue();
  queue.enqueue(start);
  let cnt = 0;

  while (queue.size()) {
    const [x, y] = queue.dequeue();

    cnt++;
    for (let k = 0; k < 8; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny]) {
        map[nx][ny] = 0;
        queue.enqueue([nx, ny]);
      }
    }
  }

  return cnt;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      map[i][j] = 0;
      anwer.push(BFS([i, j]));
    }
  }
}

console.log(anwer.length);
