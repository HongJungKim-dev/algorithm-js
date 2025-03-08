function solution(s, n) {
    let answer = "";
    const upperStart = 'A'.charCodeAt();
    const upperEnd = 'Z'.charCodeAt();
    const upperDiff = 'Z'.charCodeAt() - 'A'.charCodeAt() + 1;
    const lowerStart = 'a'.charCodeAt();
    const lowerEnd = 'z'.charCodeAt();
    const lowerDiff = 'z'.charCodeAt() - 'a'.charCodeAt() + 1;
    
    for (word of s) {
        const wordAscii = word.charCodeAt()
        if (wordAscii >= upperStart && wordAscii <= upperEnd) {
            const newWordAscii = (wordAscii - upperStart + n) % upperDiff + upperStart;
            answer += String.fromCharCode(newWordAscii);
        } else if (wordAscii >= lowerStart && wordAscii <= lowerEnd) {
            const newWordAscii = (wordAscii - lowerStart + n) % lowerDiff + lowerStart;
            answer += String.fromCharCode(newWordAscii);
        } else {
            answer += word;
        }
    }
    return answer;
}