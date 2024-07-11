const filePath =
  process.platform === "linux" ? "/dev/stdin" : "1244/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const switchs = input.shift().split(" ").map(Number);
input.shift();
const actions = input.map((e) => e.split(" ").map(Number));

function men(number, switchs) {
  for (let i = 0; i < switchs.length; i++) {
    if ((i + 1) % number === 0) {
      switchs[i] = switchs[i] === 0 ? 1 : 0;
    }
  }
}
function women(number, switchs) {
  const range = Math.max(number - 1, switchs.length - number);
  switchs[number - 1] = switchs[number - 1] === 0 ? 1 : 0;
  for (let i = 1; i <= range; i++) {
    if (switchs[number - 1 - i] != switchs[number - 1 + i]) break;
    switchs[number - 1 - i] = switchs[number - 1 - i] === 0 ? 1 : 0;
    switchs[number - 1 + i] = switchs[number - 1 + i] === 0 ? 1 : 0;
  }
}

actions.forEach(([type, number]) => {
  if (type === 1) men(number, switchs);
  else if (type === 2) women(number, switchs);
});

let result = [];
/**
 * 스위치의 상태를 1번 스위치에서 시작하여 마지막 스위치까지 한 줄에 20개씩 출력한다.
 * 예를 들어 21번 스위치가 있다면 이 스위치의 상태는 둘째 줄 맨 앞에 출력한다.
 * 켜진 스위치는 1, 꺼진 스위치는 0으로 표시하고, 스위치 상태 사이에 빈칸을 하나씩 둔다.
 */
while (switchs.length > 0) {
  result.push(switchs.splice(0, 20).join(" "));
}
console.log(result.join("\n"));