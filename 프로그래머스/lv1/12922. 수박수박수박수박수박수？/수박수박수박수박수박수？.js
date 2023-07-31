function solution(n) {
    let answer = '';
    const pattern = ['수', '박'];
    const patternLength = pattern.length;
    
    for (let i = 0; i < n; i++) {
       answer += pattern[i % patternLength] 
    }
    return answer;
}