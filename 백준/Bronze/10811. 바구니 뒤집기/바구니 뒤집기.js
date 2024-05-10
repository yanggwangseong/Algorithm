const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...arr] = input;

const [len, m] = n.split(" ");

const poket = Array.from({ length: len })
  .fill()
  .map((item, index) => index + 1);

const result = arr.map((item) => item.split(" ").map(Number));

result.forEach((data, index) => {
  const [i, j] = data;

  // i-1 ~ j-1 까지 reverse
  let reversedPart = poket.slice(i - 1, j).reverse();
  poket.splice(i - 1, j - (i - 1), ...reversedPart);
  //console.log(index, poket);
});
console.log(poket.join(" "));