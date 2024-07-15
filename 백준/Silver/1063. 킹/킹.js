const filePath =
  process.platform === "linux" ? "/dev/stdin" : "1063/example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [K, J, N] = input.shift().split(" ");

const ABC = ["A", "B", "C", "D", "E", "F", "G", "H"];

let K1 = K.split("")
  .reverse()
  .map((value, index) =>
    index === 0 ? parseInt(value) - 1 : ABC.indexOf(value)
  );

let J1 = J.split("")
  .reverse()
  .map((value, index) =>
    index === 0 ? parseInt(value) - 1 : ABC.indexOf(value)
  );

while (input.length) {
  const move = input.shift();
  let p = [];
  switch (move) {
    case "R":
      p = [0, 1];
      break;
    case "L":
      p = [0, -1];
      break;
    case "B":
      p = [-1, 0];
      break;
    case "T":
      p = [1, 0];
      break;
    case "RT":
      p = [1, 1];
      break;
    case "LT":
      p = [1, -1];
      break;
    case "RB":
      p = [-1, 1];
      break;
    case "LB":
      p = [-1, -1];
      break;
  }

  const [Kx, Ky] = K1;
  const [Jx, Jy] = J1;

  const nx = Kx + p[0];
  const ny = Ky + p[1];

  if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
    if (nx === Jx && ny === Jy) {
      const jnx = Jx + p[0];
      const jny = Jy + p[1];
      if (jnx >= 0 && jnx < 8 && jny >= 0 && jny < 8) {
        K1 = [nx, ny];
        J1 = [jnx, jny];
      }
    } else {
      K1 = [nx, ny];
    }
  }
}

console.log([K1[0] + 1, ABC[K1[1]]].reverse().join(""));
console.log([J1[0] + 1, ABC[J1[1]]].reverse().join(""));