const filePath =
  process.platform === "linux" ? "/dev/stdin" : "2884/example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const map = input.map((item) => item.split(" ").map(Number)).flat();

if (map[1] >= 45) {
  map[1] = map[1] - 45;
} else {
  if (map[0] === 0) {
    map[0] = 23;
  } else {
    map[0] = map[0] - 1;
  }
  map[1] = 60 - 45 + map[1];
}

console.log(map.join(" "));