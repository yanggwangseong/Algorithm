const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

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

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((item) => item.split(" ").map(Number));

//상하좌우
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const answer = [];

const queue = new Queue();

function BFS(start) {
  queue.enqueue(start);

  let cnt = 0;

  while (queue.size()) {
    const [x, y] = queue.dequeue();
    cnt++;
    // 현재 좌표 기준 인접한 곳 탐색 반복문
    for (let k = 0; k < 4; k++) {
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

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      map[i][j] = 0; // 시작을 방문 처리 해주어야함.
      answer.push(BFS([i, j]));
    }
  }
}
console.log(answer.length);
console.log(answer.length === 0 ? 0 : Math.max(...answer));