function solution(n) {
    const start = 2;
    const end = n % 2 === 0 ? n : n -1;
    const count = end / 2;
    return end === start ? start : (start + end) * count / 2
}