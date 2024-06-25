const filePath =
  process.platform === "linux" ? "/dev/stdin" : "1018/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const map = input.map((item) => item.split(""));

const answer = [];

/**
 *  "지민이는 이 보드를 잘라서 8×8 크기의 체스판으로 만들려고 한다."
 *  해당 부분을 놓쳤다. 문제를 잘 읽어야됨.
 */

//하얀색이 먼저 시작하는 판
const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

//검은색이 먼저 시작하는 판
const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

//하얀색이 먼저 시작하는 판과 비교하여 다르다면 count
function whiteFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (map[i + x][j + y] !== white[i][j]) count++;
    }
  }
  return count;
}

//검은색이 먼저 시작하는 판과 비교하여 다르다면 count
function blackFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (map[i + x][j + y] !== black[i][j]) count++;
    }
  }
  return count;
}

//전체 판을 움직이는 형태로 작성했기에, -7을 해줌으로써 전체 판을 벗어나지 않게 해준다.
for (let j = 0; j < N - 7; j++) {
  for (let k = 0; k < M - 7; k++) {
    answer.push(whiteFirst(j, k));
    answer.push(blackFirst(j, k));
  }
}
console.log(Math.min(...answer));