function solution(numbers) {
    if(!numbers) return;
    if(numbers.length < 1) return ;
    if(numbers.length > 1000) return ;
    
    const answer = [];
    
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < -10000) return;
        if(numbers[i] > 10000) return;
        answer[i] = numbers[i]*2;    
    }
    
    return answer;
    
}