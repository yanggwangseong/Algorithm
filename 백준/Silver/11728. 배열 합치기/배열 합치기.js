const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function towPointers(arr1, arr2) {
  let result = [];
  let p1 = (p2 = 0);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) result.push(arr1[p1++]);
    else result.push(arr2[p2++]);
  }

  while (p1 < arr1.length) result.push(arr1[p1++]);
  while (p2 < arr2.length) result.push(arr2[p2++]);

  return result;
}

const sortArray1 = input[1]
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

const sortArray2 = input[2]
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

const answer = towPointers(sortArray1, sortArray2);

console.log(answer.join(" "));