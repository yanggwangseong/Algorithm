const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let pay = 1000 - input.map(Number)[0];

let cnt = 0;

while (pay !== 0) {
  if (Math.floor(pay / 500) > 0) {
    cnt += Math.floor(pay / 500);
    pay = pay % 500;
  } else if (Math.floor(pay / 100) > 0) {
    cnt += Math.floor(pay / 100);
    pay = pay % 100;
  } else if (Math.floor(pay / 50) > 0) {
    cnt += Math.floor(pay / 50);
    pay = pay % 50;
  } else if (Math.floor(pay / 10) > 0) {
    cnt += Math.floor(pay / 10);
    pay = pay % 10;
  } else if (Math.floor(pay / 5) > 0) {
    cnt += Math.floor(pay / 5);
    pay = pay % 5;
  } else if (Math.floor(pay / 1) > 0) {
    cnt += Math.floor(pay / 1);
    pay = pay % 1;
  }
}

console.log(cnt);