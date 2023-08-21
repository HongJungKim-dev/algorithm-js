function solution(k, tangerine) {
    const obj = {};
    for (const element of tangerine) {
        if (obj[element] === undefined) {
            obj[element] = 1;
        } else {
            obj[element] += 1;
        }
    }
    
    const values = Object.values(obj);
    values.sort((a, b) => b - a);
    
    let count = 0;
    let sum = 0;
    const valueLength = values.length;
    sum = k;
    for (let i = 0; i < valueLength; i += 1) {
        const value = values[i];
        sum -= value;
        count += 1;

        if (sum <= 0) {
            break;
        }
    }

    return count;
}