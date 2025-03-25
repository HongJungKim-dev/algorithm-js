function solution(n, m, section) {
    let answer = 0;
    let target = 0;
    for (const element of section) {
        if (target < element) {
            target = element + m - 1;
            answer += 1;
        }
    }
    return answer;
}