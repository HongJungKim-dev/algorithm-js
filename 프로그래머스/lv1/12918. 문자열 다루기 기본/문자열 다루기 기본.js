function solution(s) {
    let isNumber = true;
    for (const word of s) {
        if (isNaN(word)) {
            isNumber = false;
        }
    }
    return isNumber && (s.length === 4 || s.length === 6);
}