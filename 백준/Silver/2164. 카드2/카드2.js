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

const [n] = input.map(Number);

const numbers = Array.from({ length: n })
  .fill()
  .map((item, index) => index + 1);

const queue = new Queue();
queue.queue = numbers;
queue.rear = numbers.length;

while (queue.size() !== 1) {
  queue.dequeue();

  const two = queue.dequeue();
  queue.enqueue(two);
}

console.log(queue.peek());