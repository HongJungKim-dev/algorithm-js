function solution(s, n) {
    let answer = '';
    const str = 'azAZ';
    const diff = str.charCodeAt(1) - str.charCodeAt(0) + 1;

    const sLength = s.length;
    for (let i = 0; i < sLength; i += 1) {
        const uniCode = Number(s.charCodeAt(i));
        const isLower = uniCode >= 97 && uniCode <= 122;
        const isUpper = uniCode >= 65 && uniCode <= 90;
        const code = (isLower || isUpper) ? uniCode + n : uniCode;
        
        const newUniCode = isLower && code > 122 || isUpper && code > 90 ? code - 26 : code;
        const newWord = String.fromCharCode(newUniCode)
        
        answer += newWord;
    }
    return answer;
}