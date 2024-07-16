const filePath =
  process.platform === "linux" ? "/dev/stdin" : "8979/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// N 국가 수 K 등수를 알고 싶은 국가
const [N, K] = input.shift().split(" ").map(Number);

const map = input.map((item) => item.split(" ").map(Number));

map.sort((a, b) => {
  if (b[1] !== a[1]) return b[1] - a[1];
  else if (b[2] !== a[2]) return b[2] - a[2];
  else if (b[3] !== a[3]) return b[3] - a[3];
});

let idx = map.findIndex((e) => e[0] === K);

/**
 * JSON.stringify 메서드를 사용해준 이유는 배열과 배열을 비교할 때는 해당 배열의 값이 아니라 배열의 참조끼리 비교하기 때문에
 * 원소의 개수와 값이 똑같더라도 서로 다른 배열을 비교하면 false를 반환하기 때문이다.
 * 하지만 우리는 배열에 담긴 값(각 메달의 수)을 비교해야 하기 때문에 JSON.stringify 메서드를 사용하여 배열을 문자열화 시켜서 비교해야 한다.
 *
 * 메달 수가 같다 === 등수가 똑같다. 즉 해당하는 인덱스까지 갈 필요도 없다.
 * 문제를 풀때 너무 해당 target 인덱스를 찾을려고 하지말고 결과 출력에 집중해야 한다.
 * 가령 해당 traget 인덱스에 신경 써서 ++나 --로 하는게 아니라 문제 근본에 등수에 접근하는거기 때문에
 * 메달 수 가 같다 === 등수가 같다가 된다.
 */
for (let i = 0; i < N; i++) {
  if (
    JSON.stringify(map[idx].slice(1, 4)) === JSON.stringify(map[i].slice(1, 4))
  ) {
    console.log(i + 1);
    break;
  }
}