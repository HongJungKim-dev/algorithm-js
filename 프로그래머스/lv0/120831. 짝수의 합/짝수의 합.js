function solution(n) {
    const start = 2;
    const end = n % 2 === 0 ? n : n -1;
    return end === 2 ? start : (start + end) * (end / 2) / 2
}