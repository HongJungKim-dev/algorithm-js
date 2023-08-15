function solution(l, r) {
    const answer = [];
    
    for (let i = l; i <= r; i++) {
        const str = `${i}`;
        
        const splitA = str.split('5').join('');
        const splitB = splitA.split('0');
        const isCandidate = splitB.join('').length === 0;
        
        if (!isCandidate) {
            continue;
        }
        
        answer.push(i);
    }
    
    return answer.length > 0 ? answer : [-1];
}