function solution(n) {
    let answer = 0;
    const sqrt = Math.sqrt(n);
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += i;
        }
    }
    return answer;
}