function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const popped = numbers.pop();
    return popped * numbers.pop();
}