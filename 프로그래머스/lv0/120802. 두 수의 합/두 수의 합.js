function solution(num1, num2) {
    const numbers = [num1,num2];
    const sum = numbers.reduce((accumulator, current)=> accumulator + current, 0);
    return sum;
}