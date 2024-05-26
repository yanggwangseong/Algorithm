const fs = require('fs');
const input = fs.readFileSync(0,"utf8").toString()

const m = parseInt(input)

for(let n=0; n<m; n++){
    let sum = n
    n_str = n.toString()
    let length = n_str.length
    for(let i=0;i<length;i++){
        sum += parseInt(n_str[i])
    }
    if(m===sum){
        console.log(n)
        break;
    }
    if(n===m-1){
        console.log(0)
    }
}