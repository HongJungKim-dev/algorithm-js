function solution(s) {
    let count = 0;
    let currentS = s;
    let loop = 0;
    
    while (true) {
        if (currentS === '1') {
            break;
        }
        
        const arrS = currentS.split('');
        const totalLength = arrS.length;
        const target = arrS.filter((num) => num === '1');
        const removedLength = totalLength - target.length;
        count += removedLength;
        currentS = target.join('')
                    .length.toString(2);
        loop += 1;
    }
    
    const answer = [];
    answer.push(loop);
    answer.push(count);

    return answer;
}