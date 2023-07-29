function solution(s) {
    const numbers = s.split(' ')
                        .map((value) => Number(value));
    const min = numbers[0];
    const max = numbers[numbers.length - 1];

    return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}