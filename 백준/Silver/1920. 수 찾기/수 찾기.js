const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs")
//   .readFileSync("example.txt")
//   .toString()
//   .trim()
//   .split("\n");

const binarySearch = (target, numbers) => {
  let minLength = 0;
  let maxLength = numbers.length - 1;

  while (minLength <= maxLength) {
    let middleLength = Math.floor((minLength + maxLength) / 2);
    if (target > numbers[middleLength]) {
      minLength = middleLength + 1;
    } else if (target < numbers[middleLength]) {
      maxLength = middleLength - 1;
    } else {
      return 1;
    }
  }

  return 0;
};

const sortArray = input[1]
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);
const targetArray = input[3].split(" ").map(Number);
const answer = targetArray.map((v) => binarySearch(v, sortArray));
console.log(answer.join("\n"));