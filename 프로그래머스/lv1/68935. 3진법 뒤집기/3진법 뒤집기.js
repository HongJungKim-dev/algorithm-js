function solution(n) {
    let answer = '';
    let target = n;
    const num = 3;
    
    while (target) {
        answer = target % num + answer;
        target = Math.floor(target / num);
    }

    let result = 0;
    let multi = 1;
    for (const currentNum of answer) {
        result += Number(currentNum) * multi;
        multi *= num;
    }
    return result;
}