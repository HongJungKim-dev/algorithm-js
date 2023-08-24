function solution(num) {
    let answer = 0;
    let number = num;
    const limit = 500;
    while (number !== 1) {
        if (answer === limit) {
            break;
        }
        
        if (number % 2 === 0) {
            number /= 2;
        } else {
            number = number * 3 + 1;
        }
        
        answer += 1;
    }
    return number === 1 ? answer : -1;
}