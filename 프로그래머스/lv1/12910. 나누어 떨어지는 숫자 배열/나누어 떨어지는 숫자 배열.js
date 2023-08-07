function solution(arr, divisor) {
    const answer = arr.filter((target) => target % divisor === 0).sort((a, b) => a - b);
    const emptyCase = [-1];
    
    return answer.length > 0 ? answer : emptyCase;
}