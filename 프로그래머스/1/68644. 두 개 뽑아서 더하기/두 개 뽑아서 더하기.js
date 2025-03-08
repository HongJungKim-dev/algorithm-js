function getCombination(arr, num) {
    const answer = [];
    function backTrack(start, combination) {
        if (combination.length === num) {
                answer.push([...combination])
                return;
        }
        for (let i = start; i < arr.length; i++) {
            combination.push(arr[i]);
            backTrack(i + 1, combination);
            combination.pop();
        }
    }
    backTrack(0, []);
    return answer;
}

function solution(numbers) {
    const cases = getCombination(numbers, 2);
    return [...new Set(cases.map(([a, b]) => a + b).sort((a, b) => a - b))];
}