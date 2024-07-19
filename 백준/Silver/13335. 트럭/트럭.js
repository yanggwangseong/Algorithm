const filePath =
  process.platform === "linux" ? "/dev/stdin" : "13335/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, W, L] = input.shift().split(" ").map(Number);

const map = input.map((item) => item.split(" ").map(Number)).flat();

let q = [];
let sum = 0;
let ans = 0;

for (let i = 0; i < N; i++) {
  while (true) {
    if (q.length === W) {
      sum -= q.shift();
    }
    if (sum + map[i] <= L) break;
    q.push(0);
    ans++;
  }
  q.push(map[i]);
  sum += map[i];
  ans++;
}
ans += W;
console.log(ans);