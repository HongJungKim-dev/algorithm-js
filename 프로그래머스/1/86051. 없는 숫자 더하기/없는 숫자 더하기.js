function solution(numbers) {
    const total = numbers.reduce((acc, cur) => acc + cur, 0);
    const allNums = Array.from(({ length: 10 }), (_, index) => index);
    const allSum = allNums.reduce((acc, cur) => acc + cur, 0);

    return allSum - total;
}