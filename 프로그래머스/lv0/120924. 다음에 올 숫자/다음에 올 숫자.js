function calculate(rule, diff, num) {
    let result = 0;
    if (rule === '+') {
        result = num + diff;
    } else if (rule === '*') {
        result = num * diff;
    }
    
    return result;
}

function solution(common) {
    const commonLen = common.length;
    const firstNum = common[0];
    const secondNum = common[1];
    const firstDiff = secondNum - firstNum;
    const secondDiff = common[2] - secondNum;
    const rule = firstDiff === secondDiff ? '+' : '*';
    const diff = firstDiff === secondDiff ? firstDiff : secondNum / firstNum;
    
    return calculate(rule, diff, common[commonLen - 1]);
}