const filePath =
  process.platform === "linux" ? "/dev/stdin" : "1697/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.map((item) => item.split(" ").map(Number)).flat();

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

function BFS(S, E) {
  if (S === E) return 0;

  let answer = 0;
  let ch = Array.from({ length: 100001 }, () => 0);
  let dis = Array.from({ length: 100001 }, () => 0);
  const queue = new Queue();
  ch[S] = 1;
  queue.enqueue(S);
  dis[S] = 0;

  while (queue.size()) {
    let x = queue.dequeue();
    for (let move of [x - 1, x + 1, x * 2]) {
      if (move === E) return dis[x] + 1;
      if (move > 0 && ch[move] === 0) {
        ch[move] = 1;
        queue.enqueue(move);
        dis[move] = dis[x] + 1;
      }
    }
  }

  return answer;
}

console.log(BFS(N, M));