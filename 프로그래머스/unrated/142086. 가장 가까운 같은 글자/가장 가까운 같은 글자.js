function solution(s) {
    const answer = [];
    const sLen = s.length;
    
    for (let i = sLen - 1; i >= 0; i--) {
        const temp = [];
        const current = s[i];
        temp.push(i)
        for (let j = i - 1; j >= 0 ; j--) {
            const target = s[j]
            if (temp.length === 2) {
                break;
            }
            if (current === target) {
                temp.push(j)
            }
        }
        
        if (temp.length === 1) {
            answer.push(-1)
            continue
        }
        const poppedA = temp.pop()
        const poppedB = temp.pop()
        answer.push(Math.abs(poppedA - poppedB))
    }
    //answer.push(-1)
    answer.reverse()
    return answer;
}