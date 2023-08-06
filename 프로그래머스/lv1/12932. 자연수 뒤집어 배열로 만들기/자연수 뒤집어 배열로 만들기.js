function solution(n) {
    return `${n}`.split('').map((str) => Number(str)).reverse();
}