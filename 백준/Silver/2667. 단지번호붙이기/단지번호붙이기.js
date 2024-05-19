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

const N = Number(input.shift());

const map = input.map((row) => row.split("").map(Number));

//상하좌우
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];
// const ds = [[-1, 0], [1, 0], [0, 1], [0, -1]]; // 인접한 좌우상하 xy좌표

const answer = [];

const queue = new Queue();

function BFS(start) {
  queue.enqueue(start);
  let cnt = 0; // 단지내 집의 갯수

  while (queue.size()) {
    const [x, y] = queue.dequeue(); // 현재 좌표
    cnt++;

    // 현재 좌표 기준 인접한 곳 탐색 반복문
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      // 위치가 지도 밖으로 벗어나지 않고 집이 있는 곳(1) 이라면
      if (ny >= 0 && ny < N && nx >= 0 && nx < N && map[nx][ny]) {
        map[nx][ny] = 0; // 방문처리
        queue.enqueue([nx, ny]);
      }
    }
  }

  return cnt;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      // 집이 있다면
      map[i][j] = 0; // 방문 처리
      answer.push(BFS([i, j]));
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));