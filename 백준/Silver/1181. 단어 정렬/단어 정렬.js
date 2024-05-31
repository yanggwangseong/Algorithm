const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input.shift());

input.sort((prev, cur) => {
  if (prev.length < cur.length) {
    return -1;
  } else if (prev.length === cur.length) {
    return prev > cur ? 1 : -1;
  }
});

console.log([...new Set([...input])].join("\n"));