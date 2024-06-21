const filePath =
  process.platform === "linux" ? "/dev/stdin" : "16953/example.txt";
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
  if (S === E) return -1;

  let answer = -1;

  const queue = new Queue();
  queue.enqueue(S);
  queue.enqueue(1); // count

  while (queue.size()) {
    let x = queue.dequeue();
    let count = queue.dequeue();

    for (let move of [x * 2, `${x}${1}`]) {
      move = parseInt(move);
      if (move === E) return count + 1;

      if (move <= E) {
        queue.enqueue(move);
        queue.enqueue(count + 1);
      }
    }
  }

  return answer;
}

console.log(BFS(N, M));