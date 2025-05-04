function solution(dartResult) {
    let answer = 0;
    const regex = /(\d{1,2})([SDT])([*#]?)/g;
    let match;
    const dartResultReverse = [];
    
    while ((match = regex.exec(dartResult)) !== null) {
       const[group, numStr, pow, item] = match;
 
        dartResultReverse.push({
            group,
            numStr,
            pow,
            item
        }) 
    }
    
    dartResultReverse.reverse();
    let count = 1;
    for(const result of dartResultReverse) {
        const { numStr, pow, item } = result;
        const exponent1 = pow === 'T' ? '3' : pow;
        const exponent2 = exponent1 === 'D' ? '2' : exponent1;
        const exponent = exponent2 === 'S' ? '1' : exponent2;
        const num = Math.pow(Number(numStr), Number(exponent));

        if(item === '#') {
            answer += (num * (-1) * count);
            count = 1;
        } else if(item === '*') {
            answer += (num * 2) * count;
            count = 2;
        } else {
            answer += (num * count);
            count = 1;
        }
    }
    
    return answer;
}