const range = 10000;

const check = Array(range + 1).fill(true);
function d(n) {
  let number = n;
  let result = 0;
  for (let i = 0; i < String(n).length; i++) {
    result += number % 10;
    number = Math.floor(number / 10);
  }

  return n + result;
}
for (let i = 0; i <= range; i++) {
  check[d(i)] = false;
}

for (let i = 0; i < range; i++) {
  if (check[i]) {
    console.log(i);
  }
}