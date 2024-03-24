const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, problem] = input;

const people = problem
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function solution(people) {
  let answer = 0;
  let sum = 0;

  for (let item of people) {
    sum += item;
    answer += sum;
  }

  return answer;
}
console.log(solution(people));