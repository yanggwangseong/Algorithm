const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(n, m, nums) {
  let answer = 0;

  nums.sort((a, b) => a - b);
  let lt = 0; // 가장 앞
  let rt = n - 1; // 가장 뒤

  // 만약 lt가 rt와 같아지면 루프 탈출
  while (lt < rt) {
    let result = nums[lt] + nums[rt];
    answer += result === m ? 1 : 0;
    lt += result <= m ? 1 : 0;
    rt -= result >= m ? 1 : 0;
  }
  return answer;
}

const sortArray = input[2]
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

const answer = solution(sortArray.length, Number(input[1]), sortArray);
console.log(answer);