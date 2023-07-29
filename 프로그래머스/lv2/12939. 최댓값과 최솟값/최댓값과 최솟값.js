function solution(s) {
    const numbers = s.split(' ')
                        .map((value) => Number(value))
                            .sort((aNumber, bNumber) => aNumber - bNumber);
    const min = numbers[0];
    const max = numbers[numbers.length - 1];

    return `${min} ${max}`;
}