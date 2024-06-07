const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const array = input.map(Number).sort((a, b) => a - b);

function solution(arr2) {
  let answer = arr2;
  let sum = arr2.reduce((a, b) => a + b, 0);
  let flag = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr2[i] + arr2[j]) === 100) {
        arr2.splice(j, 1);
        arr2.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag === 1) break;
  }

  return answer;
}

console.log(solution(array).join("\n"));