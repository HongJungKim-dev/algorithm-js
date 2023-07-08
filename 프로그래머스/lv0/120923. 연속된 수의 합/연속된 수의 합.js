const getContinuousNum = (isOdd, total, num) => {
    const middle = Math.floor(total / num);
    const middleNum = Math.floor(num / 2);
    const distance = isOdd ? middleNum : middleNum - 1;
    const startNum = middle - distance;
    
    return Array.from({ length: num }, (_, index) => index + startNum);
}

function solution(num, total) {
    return getContinuousNum(num % 2, total, num);
}