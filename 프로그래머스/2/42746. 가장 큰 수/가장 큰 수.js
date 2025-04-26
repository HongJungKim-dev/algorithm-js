function solution(numbers) {
    numbers.sort((a, b) => {
        const aStr = `${a}${b}`;
        const bStr = `${b}${a}`;
        
        return bStr - aStr;
    })
    const numStr = numbers.join('');
    return Number(numStr) === 0 ? '0' : numStr;
}