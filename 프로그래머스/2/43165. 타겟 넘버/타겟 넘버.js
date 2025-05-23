function solution(numbers, target) {
    const visited = Array(numbers.length).fill(false);
    let answer = 0;
    const dfs = (index, sum) => {
        if(index === numbers.length) {
            if (sum === target) {
                answer += 1;
            }
            return;
        }
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    dfs(0, 0);

    return answer;
}

