function getDivisorCount(number) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            divisors.push(i);
            if (i !== number / i) {
                divisors.push(number / i);
            }
        }
    }
    
    return divisors.length;
}

function solution(number, limit, power) {
    const numbers = Array.from(({ length: number}), (_,index) => index + 1);
    const divisorCounts = numbers.map((num) => getDivisorCount(num));
    const filteredDivisorCounts = divisorCounts.map((divisor) => {
        if (divisor > limit) {
            return power;
        } else {
            return divisor;
        }
    });
    
    return filteredDivisorCounts.reduce((acc, cur) => acc + cur, 0);
}