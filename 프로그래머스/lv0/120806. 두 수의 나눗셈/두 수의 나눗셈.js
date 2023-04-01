function solution(num1, num2) {
    if( (num1 <= 0) || (num1 > 100)) return;
    if( (num2 <= 0) || (num2 > 100)) return;
    const answer = Math.floor((num1/num2)* 1000)
    return answer;
}