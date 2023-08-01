function solution(arr) {
    const minNum = Math.min(...arr);
    const answer = arr.filter((element) => element !== minNum);
    const emptyCase = [-1];
    
    return answer.length > 0 ? answer : emptyCase;
}