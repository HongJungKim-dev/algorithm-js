function solution(s) {
    const answer = [];
    const lastIndex = {};
    
    for (let i = 0; i < s.length; i++) {
        const word = s[i];
        if (lastIndex[word] === undefined) {
            answer.push(-1);
            lastIndex[word] = i;
        } else {
            answer.push(i - lastIndex[word]);
            lastIndex[word] = i;
        }
    }
    return answer;
}