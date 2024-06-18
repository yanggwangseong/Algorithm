const filePath =
  process.platform === "linux" ? "/dev/stdin" : "2490/example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const map = input.map((item) => item.split(" ").map(Number));

console.log(
  map
    .map((data) => {
      let a = 0;
      let b = 0;

      data.forEach((data) => {
        if (data === 0) a++;
        if (data === 1) b++;
      });

      if (a === 1) return "A";
      if (a === 2) return "B";
      if (a === 3) return "C";
      if (a === 4) return "D";
      if (b === 4) return "E";
    })
    .join("\n")
);
