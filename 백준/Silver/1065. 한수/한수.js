const filePath =
  process.platform === "linux" ? "/dev/stdin" : "1065/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);

let cnt = 0;

for (let i = 1; i <= N; i++) {
  if (i < 100) cnt += 1;
  else if (i >= 100 && i < 1000) {
    let Num = String(i);
    let dif1 = Number(Num[1]) - Number(Num[0]);
    let dif2 = Number(Num[2]) - Number(Num[1]);

    if (dif1 === dif2) cnt++;
  }
}

console.log(cnt);
