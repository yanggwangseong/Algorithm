const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const war = input.map((item) => item.split(""));

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

// 상하좌우
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const queue = new Queue();
let [white, blue] = [0, 0];

function BFS(start) {
  queue.enqueue(start);
  const team = war[start[0]][start[1]]; // 현재 값
  let cnt = 0; // 갯수
  war[start[0]][start[1]] = 0; // 방문처리

  while (queue.size()) {
    const [x, y] = queue.dequeue(); // 현재 좌표
    cnt++;

    // 현재 좌표 기준 인접한 곳 탐색 반복문
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && war[nx][ny] === team) {
        war[nx][ny] = 0; // 방문처리
        queue.enqueue([nx, ny]);
      }
    }
  }

  // 현재 위치의 값이 'W'이면 white에 'B'이면 blue에 카운팅한 값의 제곱값 더하기
  team == "W" ? (white += cnt ** 2) : (blue += cnt ** 2);
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (war[i][j]) BFS([i, j]);
  }
}

console.log(white + " " + blue);