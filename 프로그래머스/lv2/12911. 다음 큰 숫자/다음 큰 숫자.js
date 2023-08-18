function getOneCount(str) {
    return str.toString(2).split('').filter((number) => number === '1').length;
}

function solution(n) {
    let answer = 0;
    const small = 78
    const big = 83
    const currentNumCount = n.toString(2).split('').filter((number) => number === '1').length;
    let num = n + 1;
    
    while(true) {
        const candidateCount = getOneCount(num);
        if (currentNumCount === candidateCount) {
            answer = Number(num);
            break;
        }
        num += 1;
    }
    
    return answer;
}