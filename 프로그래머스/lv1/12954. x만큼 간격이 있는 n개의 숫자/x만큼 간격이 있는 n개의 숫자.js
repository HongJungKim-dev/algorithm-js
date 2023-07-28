function solution(x, n) {
    var answer = [];
    return Array.from({ length: n }, (_, i) => (i + 1) * x);
}