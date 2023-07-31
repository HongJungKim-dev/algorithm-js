function solution(arr)
{
    const answer = [];
    const arrLength = arr.length;
    
    answer.push(arr[0]);
    
    for (let i = 1; i < arrLength; i++) {
        const element = arr[i];
        const popped = answer.pop();
        
        answer.push(popped);
        
        if (popped !== element) {
            answer.push(element);
        } 
    }
    
    return answer;
}