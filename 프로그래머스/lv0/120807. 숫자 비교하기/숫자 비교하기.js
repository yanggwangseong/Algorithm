function solution(num1, num2) {
    const ArrayNum1 = [num1];
    let answer;
    if(ArrayNum1.includes(num2)){
        answer = 1;
    }else{
        answer = -1;
    }
    return answer;
}