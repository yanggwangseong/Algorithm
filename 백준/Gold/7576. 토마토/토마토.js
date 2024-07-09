const filePath =
  process.platform === "linux" ? "/dev/stdin" : "7576/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const map = input.map((item) => item.split(" ").map(Number));

const dist = Array.from(Array(N), () => Array(M).fill(0));

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

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

const queue = new Queue();

function BFS() {
  while (queue.size()) {
    const [x, y] = queue.dequeue();

    for (let z = 0; z < 4; z++) {
      const nx = x + dx[z];
      const ny = y + dy[z];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (dist[nx][ny] >= 0) continue;

      dist[nx][ny] = dist[x][y] + 1;

      queue.enqueue([nx, ny]);
    }
  }
}

/**
 * 이 문제는 여러 개의 시작점에서 모든 지점으로의 거리를 구하는 문제
 * 익은 토마토가 여러개일 수 있기 때문에 for 루프에서 bfs호출 하면 안되는것 같다.
 * ** 핵심 : " 시작점이 여러개인 BFS를 돌리는 방법은 그냥 모든 시작점을 큐에 넣고 BFS를 돌리면 된다 " **
 */
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      queue.enqueue([i, j]);
    }

    // 익지 않은 토마토일때
    if (map[i][j] === 0) {
      dist[i][j] = -1;
    }
  }
}

BFS();

function ResultFunction() {
  let day = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dist[i][j] === -1) return -1;

      day = Math.max(day, dist[i][j]);
    }
  }
  return day;
}

console.log(ResultFunction());