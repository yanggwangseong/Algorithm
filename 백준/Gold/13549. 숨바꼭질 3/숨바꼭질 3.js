const filePath =
  process.platform === "linux" ? "/dev/stdin" : "13549/example.txt";
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

const queue = new Queue();

function BFS(S, E) {
  // 메모리 초과가 나서 N(0 ≤ N ≤ 100,000) 조건에 따른 ch 배열 생성
  let ch = Array.from({ length: 100001 }, () => 0);

  queue.enqueue([S, 0]);
  ch[S] = 1;

  while (queue.size()) {
    let [x, count] = queue.dequeue();

    if (x === E) {
      return count;
    }

    for (let move of [x * 2, x - 1, x + 1]) {
      if (move < 0 || move > 100000 || ch[move]) continue;

      if (move === x * 2) {
        queue.enqueue([move, count]);
      } else {
        queue.enqueue([move, count + 1]);
      }
      ch[move] = 1;
    }
  }
}

console.log(BFS(N, M));