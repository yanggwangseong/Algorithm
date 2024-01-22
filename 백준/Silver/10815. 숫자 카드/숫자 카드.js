const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numberArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const targetArr = input[3].split(" ").map(Number);

function binarySearch(arry, target) {
  let start = 0;
  let end = arry.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arry[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return arry[end] === target ? 1 : 0;
}

console.log(targetArr.map((item) => binarySearch(numberArr, item)).join(" "));