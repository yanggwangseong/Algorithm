const filePath =
  process.platform === "linux" ? "/dev/stdin" : "3187/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const map = input.map((item) => item.split(""));
const visited = Array.from(Array(N), () => Array(M).fill(false));

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

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

let sheepCnt = 0;
let wolfCnt = 0;

function BFS(start) {
  const queue = new Queue();
  queue.enqueue(start);

  let vx = 0; // 늑대
  let kx = 0; // 양

  while (queue.size()) {
    const [x, y] = queue.dequeue();

    if (map[x][y] === "k") kx++;
    else if (map[x][y] === "v") vx++;

    //if (map)
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (
        nx < 0 ||
        nx >= N ||
        ny < 0 ||
        ny >= M ||
        map[nx][ny] == "#" ||
        visited[nx][ny]
      )
        continue;

      visited[nx][ny] = true;
      queue.enqueue([nx, ny]);
    }
  }

  if (kx > vx) sheepCnt += kx;
  else wolfCnt += vx;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j]) {
      visited[i][j] = true;

      BFS([i, j]);
    }
  }
}

console.log(`${sheepCnt} ${wolfCnt}`);