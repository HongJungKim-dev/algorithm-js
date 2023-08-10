function solution(numbers) {
    const totalNumbers = Array.from({ length: 10 }, (_, i) => i);

    return totalNumbers.reduce((acc, cur) => acc + cur, 0) - numbers.reduce((acc, cur) => acc + cur, 0);
}