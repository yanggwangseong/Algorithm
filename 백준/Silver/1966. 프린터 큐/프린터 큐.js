const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...arr] = input;

const result = arr.map((item) => item.split(" ").map(Number));
let problem = [];
for (let i = 0; i < result.length; i += 2) {
  problem.push([result[i], result[i + 1]]);
}

const answer = [];

problem.forEach((item, l) => {
  let [[n, m], testCase] = item;
  let cnt = 1;

  while (testCase.length) {
    let max = Math.max(...testCase);
    const shiftItem = testCase.shift();

    if (shiftItem >= max && m === 0) {
      answer.push(cnt);
      break;
    } else if (shiftItem < max && m === 0) {
      testCase.push(shiftItem);
      m = testCase.length - 1;
    } else if (shiftItem >= max) {
      cnt++; // 제일 중요도가 높은 케이스기 때문에 실행 횟수 1회증가
      m--;
    } else if (shiftItem < max) {
      testCase.push(shiftItem);
      m--;
    }
  }
});

console.log(answer.join("\n"));