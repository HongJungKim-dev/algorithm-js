function solution(number, limit, power) {
    let answer = 0;
    const nums = [];
    const candidates = Array.from({ length: number }, (_, i) => i + 1);

    for (const num of candidates) {
        let count = 0;
        const sqrt = Math.sqrt(num)
        const half = num / 2;
        for (let i = 1; i <= sqrt; i++) {
            if (num % i === 0) {
                count += i === sqrt ? 1 : 2;
            }
        }

        if (count > limit) {
            answer += power;
        } else {
            answer += count
        }
    }

    return answer;
}