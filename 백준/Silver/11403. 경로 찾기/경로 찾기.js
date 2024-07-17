const filePath =
  process.platform === "linux" ? "/dev/stdin" : "11403/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());
const map = input.map((item) => item.split(" ").map(Number));

let visited;

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

for (let i = 0; i < N; i++) {
  visited = Array.from({ length: N }, () => Array(N).fill(false));

  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && map[i][j]) {
      BFS([i, j]);
    }
  }
}

function BFS(start) {
  const [x, y] = start;
  queue.enqueue(y);

  while (queue.size()) {
    const data = queue.dequeue();

    for (let i = 0; i < N; i++) {
      if (map[data][i] && !visited[data][i]) {
        visited[data][i] = true;
        queue.enqueue(i);
        map[x][i] = 1; // 예를 들어 0 -> 4고 4 -> 2면 0 -> 2가 true다
      }
    }
  }
}

map.forEach((element) => {
  console.log(element.join(" "));
});