const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const getScore = (c, t) => [
  c.filter((v, i) => v === t[i]).length,
  c.filter((v, i) => v !== t[i] && t.includes(v)).length,
];

const solution = (arr) =>
  [...Array(9)]
    .flatMap((_, i) =>
      [...Array(9)].flatMap((_, j) =>
        [...Array(9)].map((_, k) => [i + 1, j + 1, k + 1])
      )
    )
    .filter(([a, b, c]) => a !== b && b !== c && a !== c)
    .filter((candidate) =>
      arr.every(
        ([num, s, b]) =>
          JSON.stringify(
            getScore(candidate, String(num).split("").map(Number))
          ) === JSON.stringify([s, b])
      )
    ).length;

const [N, ...rest] = input;
const arr = Array.from({ length: N }, (_, i) => rest.slice(i * 3, i * 3 + 3));

console.log(solution(arr));
