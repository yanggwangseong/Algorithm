const filePath =
  process.platform === "linux" ? "/dev/stdin" : "11724/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const map = input.map((item) => item.split(" ").map(Number));

let visited = Array(N + 1).fill(false);
let graph = [...Array(N + 1)].map(() => []);
let answer = 0;

map.map(([from, to]) => {
  // 인접 리스트
  graph[from].push(to);
  graph[to].push(from);
});

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

function BFS(start) {
  let queue = [start];
  while (queue.length) {
    const cur = queue.shift();
    for (const vertax of graph[cur]) {
      if (!visited[vertax]) {
        visited[vertax] = true;
        queue.push(vertax);
      }
    }
  }
}

for (let i = 1; i <= N; i++) {
  // 0은 아무것도 없기 떄문에 1부터 시작
  if (!visited[i]) {
    BFS(i);
    answer++;
  }
}
console.log(answer);