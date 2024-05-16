const fs = require('fs');
const inputData = fs.readFileSync(0,'utf8').toString();
const immoralOrigin = parseInt(inputData);
console.log(immoralOrigin-543) ;