let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[0].split(' ').map(x => Number(x));
let arr = input[1].split(' ').map(x => Number(x));

const answer = [];

for (let i = 0; i <= num[0]; i++) {
    if (num[1] > arr[i]) {
        answer.push(arr[i]);
    } 
}

console.log(answer.join(' '));