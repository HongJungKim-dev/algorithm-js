function solution(n) {
    let count = 0;
    let sum = 0;
    let i = 1;
    let j = 0;
    
    for (; i <= n; i += 1) {
        const prev = (1 + i - 1) * (i - 1) / 2;
        sum = (1 + j - 1) * (j - 1) / 2 - prev
        for (; j <= n; j++) {
            if (sum === n) {
                count += 1;
                break;
            } else if (sum > n) {         
                break;
            }
            sum += j;
        }
    }
    
    if (n === i - 1) {
        count += 1;
    }
    return count;
}