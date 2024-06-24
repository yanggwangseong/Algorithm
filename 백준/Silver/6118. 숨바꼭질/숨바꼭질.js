const filePath =
  process.platform === "linux" ? "/dev/stdin" : "6118/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const map = input.map((item) => item.split(" ").map(Number));

let visited = Array(N + 1).fill(false);
let graph = [...Array(N + 1)].map(() => []);

/**
 * 방향 없는 그래프가 주어졌을 때,
 * 문제에 무방향 그래프 라고 나와있다.
 */
map.map(([from, to]) => {
  // 인접 리스트
  graph[from].push(to);
  graph[to].push(from); // 인접 리스트 만들때 이것도 만들어 주어야됨. 반례가 있음.
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

let maxLen = -1;
const vertexAry = [];

function BFS(start) {
  visited[1] = true;
  queue.enqueue(start);

  /**
   * 첫 번째는 숨어야 하는 헛간 번호를(만약 거리가 같은 헛간이 여러개면 가장 작은 헛간 번호를 출력한다)
   * 두 번째는 그 헛간까지의 거리를
   * 세 번째는 그 헛간과 같은 거리를 갖는 헛간의 개수를 출력
   */

  while (queue.size()) {
    const [cur, distance] = queue.dequeue();

    maxLen = Math.max(maxLen, distance);

    vertexAry[cur] = distance;

    for (const vertax of graph[cur]) {
      if (!visited[vertax]) {
        visited[vertax] = true;
        queue.enqueue([vertax, distance + 1]);
      }
    }
  }
}

BFS([1, 0]); // 1 시작 좌표 , 1은 거리 0 시작

let count = 0;
let lowNum = Number.MAX_SAFE_INTEGER;
for (let i = 1; i <= N; i++) {
  if (vertexAry[i] === maxLen) {
    lowNum = Math.min(lowNum, i);
    count++;
  }
}

console.log(`${lowNum} ${maxLen} ${count}`);