const filePath =
  process.platform === "linux" ? "/dev/stdin" : "11123/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input.shift();

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

function BFS(start, N, M, map) {
  const queue = new Queue();

  queue.enqueue(start);

  let cnt = 0;
  while (queue.size()) {
    const [x, y] = queue.dequeue();

    for (let z = 0; z < 4; z++) {
      const nx = x + dx[z];
      const ny = y + dy[z];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || map[nx][ny] === ".")
        continue;

      map[nx][ny] = ".";
      cnt++;
      queue.enqueue([nx, ny]);
    }
  }

  return cnt;
}

const answer = [];
while (input.length) {
  let map = [];
  const result = [];
  const [N, M] = input.shift().split(" ").map(Number);

  for (let i = 0; i < N; i++) {
    map.push(input.shift().split(""));
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === "#") {
        map[i][j] = ".";
        result.push(BFS([i, j], N, M, map));
      }
    }
  }

  answer.push(result.length);
}

console.log(answer.join("\n"));