function solution(n) {
    return `${n}`.split('').reduce((acc, cur) => Number(cur) + acc, 0);
}