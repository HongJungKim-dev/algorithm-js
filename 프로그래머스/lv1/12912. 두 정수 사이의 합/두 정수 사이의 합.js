function solution(a, b) {
    const numbers = [a, b];
    numbers.sort((a, b) => a - b);
    const min = numbers[0];
    const max = numbers[1];
    const num = (max - min + 1);
    
    return num * (min + max) / 2;
}