function solution(n, k) {
    const answer = [];
    let number = k;
    for (let i = 2; number <= n; i += 1) {
        answer.push(number)
        number = i * k;
    }
    return answer;
}