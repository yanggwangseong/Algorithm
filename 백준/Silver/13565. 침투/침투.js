const filePath =
  process.platform === "linux" ? "/dev/stdin" : "13565/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const map = input.map((item) => item.split("").map(Number));

const dx = [0, 0, -1, 1]; // 상하좌우대각선 8가지 경우
const dy = [1, -1, 0, 0]; // 상하좌우대각선 8가지 경우

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
let result = "NO";
let start = false;
let end = false;

function BFS(start) {
  // start[0] x가 0이고 map[start]값이 1인경우 시작하는곳
  // start[1] y가 N-1 이고 map[start]값이 1인경우 종료 되는곳

  queue.enqueue(start);

  while (queue.size()) {
    const [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 0) {
        if (nx === N - 1) end = true;
        map[nx][ny] = 1; // 방문 체크
        queue.enqueue([nx, ny]);
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) {
      start = false;
      end = false;
      if (i === 0) start = true;
      map[i][j] = 0;
      BFS([i, j]);
      if (start && end) result = "YES";
    }
  }
}
console.log(result);