function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, index) => acc + cur * (signs[index] ? 1 : -1), 0);
}