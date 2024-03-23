const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...arr] = input;
const times = arr
  .map((num) => num.split(" ").map((num) => +num))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

function solution(numberArr) {
  
  let answer = 0;
  let endTime = 0;

  for (let item of numberArr) {
    if (item[0] >= endTime) {
      answer++;
      endTime = item[1];
    }
  }

  return answer;
}
console.log(solution(times));
