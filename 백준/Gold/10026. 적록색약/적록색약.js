const filePath =
  process.platform === "linux" ? "/dev/stdin" : "10026/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());

const map = input.map((item) => item.split(""));
let visited = Array.from(Array(N), () => Array(N).fill(0));

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

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

function BFS(start) {
  const queue = new Queue();

  queue.enqueue(start);

  while (queue.size()) {
    const [x, y] = queue.dequeue();

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        map[nx][ny] === map[x][y] // 해당 조건문 000이거나 111이거나 문제말고 이런식으로 R,G,B나 경로 찾기를 위한 노드가 여러개일때 해당 조건 필요
      ) {
        visited[nx][ny] = 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
}

let rgb = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j] === 0) {
      visited[i][j] = 1;
      BFS([i, j]);
      rgb++;
    }
  }
}

// 방문 변수를 다시 초기화 시키는게 중요함
visited = Array.from(Array(N), () => Array(N).fill(0));

// 적록색약일때 초록색을 빨간색으로 바꿔줌
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === "G") map[i][j] = "R";
  }
}

let rb = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j] === 0) {
      visited[i][j] = 1;
      BFS([i, j]);
      rb++;
    }
  }
}

console.log(rgb + " " + rb);