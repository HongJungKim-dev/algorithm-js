function solution(n) {
    const answer = Array.from(({ length: Math.ceil(n / 2)}), (_, index) => index * 2 + 1);
    
    return answer;
}