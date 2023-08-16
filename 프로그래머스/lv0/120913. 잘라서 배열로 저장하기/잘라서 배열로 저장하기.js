function solution(my_str, n) {
    const answer = [];
    const len = my_str.length;
    
    for (let i = 0; i < len; i += n) {
        const sliced = my_str.slice(i, i + n);
        answer.push(sliced);
    }
    
    return answer;
}