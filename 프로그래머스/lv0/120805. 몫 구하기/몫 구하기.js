function solution(num1, num2) {
    let answer = 0;
    if( (num1 > 0 && num1 <= 100) && (num2 > 0 && num2 <= 100)  ){
        answer = Math.floor( num1 / num2);
    }else{
        throw Error();
    }
    
    return answer;
}