const filePath =
  process.platform === "linux" ? "/dev/stdin" : "7569/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [M, N, H] = input.shift().split(" ").map(Number);

const dx = [-1, 1, 0, 0, 0, 0]; // 좌,우,상,하,앞,뒤일 때 x좌표
const dy = [0, 0, -1, 1, 0, 0]; // 좌,우,상,하,앞,뒤일 때 y좌표
const dz = [0, 0, 0, 0, -1, 1]; // 좌,우,상,하,앞,뒤일 때 z좌표 (상자 인덱스)

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

const boxes = Array.from(Array(H), () =>
  Array.from(Array(N), () => Array.from(Array(M).fill(0)))
); // 3차원 배열

// 3차원 배열에 입력값 삽입
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    boxes[i][j] = input.shift().split(" ").map(Number);
  }
}

let unripeTomato = 0;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      // 익지 않은 토마토이면 카운트 증가
      if (boxes[i][j][k] == 0) unripeTomato++;
      // 익은 토마토이면 큐에 담기 (현재 위치 및 걸린 일수 초기값 0)
      if (boxes[i][j][k] == 1) queue.enqueue([i, j, k, 0]);
    }
  }
}

let answer = 0; // 걸린 기간(일수) 담을 변수
while (queue.size()) {
  const [z, x, y, days] = queue.dequeue();

  // 현재 위치 기준 인접한 여섯 곳 탐색할 반복문
  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const nz = z + dz[i];

    // 해당 위치가 상자(그래프) 범위 밖으로 벗어나지 않았고, 안 익은 토마토이면
    if (
      nz >= 0 &&
      nz < H &&
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < M &&
      !boxes[nz][nx][ny]
    ) {
      boxes[nz][nx][ny] = 1; // 토마토 익힘
      queue.enqueue([nz, nx, ny, days + 1]); // 큐에 해당 위치와 하루 증가한 값 담기
      unripeTomato--; // 안 익은 토마토 개수 감소
    }
  }
  answer = days;
}

// 안 익은 토마토가 있다면 -1 반환, 없으면 걸린 기간(일수) 반환
console.log(unripeTomato ? -1 : answer);