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

const map = input.map((item) => item.split("").map(Number));

//상하좌우
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

function bfs(x, y) {
  const queue = new Queue();
  queue.enqueue([x, y]);

  const result = [];
  const visisted = [];
  visisted[[x, y]] = 1;

  while (queue.size()) {
    for (let i = 0; i < queue.size(); i++) {
      let [x, y] = queue.dequeue();

      result.push([x, y]);
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < N &&
          ny < M &&
          !visisted[[nx, ny]] &&
          map[nx][ny] === 1
        ) {
          visisted[[nx, ny]] = visisted[[x, y]] + 1;

          queue.enqueue([nx, ny]);
        }
      }
    }
  }
  return visisted[[N - 1, M - 1]];
}

console.log(bfs(0, 0));