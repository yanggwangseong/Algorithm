const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...arr] = input;
const [length, target] = n.split(" ").map(Number);
const coins = arr.map(Number).sort((a, b) => b - a);

function solution(coins, sum) {
  let answer = 0;
  let add = sum;

  for (item of coins) {
    while (add / item >= 1) {
      answer++;
      add -= item;
    }
  }

  return answer;
}

console.log(solution(coins, target));