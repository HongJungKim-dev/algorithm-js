function solution(numbers) {
    numbers.sort((a, b) => {
        const targetA = Number(`${a}${b}`);
        const targetB = Number(`${b}${a}`);
        
        if (targetA < targetB) {
            return 1;
        } else if (targetA > targetB) {
            return -1;
        } else {
            return 0;
        }
    });
    const isZero = Number(numbers.join('')) === 0;
    return isZero ? "0" : numbers.join('');
}