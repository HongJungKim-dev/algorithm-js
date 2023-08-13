function solution(n) {
    const sqrt = (Math.sqrt(n));
    const isIntegerSqrt = Number.isInteger((Math.sqrt(n)));
    
    return isIntegerSqrt ? (sqrt + 1) ** 2 : -1;
}