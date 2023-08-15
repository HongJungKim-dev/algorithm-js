function solution(quiz) {
    const answer = [];
    
    const calculate = {
        '+': (operand1, operand2) => operand1 + operand2,
        '-': (operand1, operand2) => operand1 - operand2,
    }
    
    for (const question of quiz) {
        const [operand1, operator, operand2, equalSign, result] = question.split(' ');
        const calcResult = calculate[operator](Number(operand1), Number(operand2));
        answer.push(calcResult === Number(result) ? 'O' : 'X')
    }
    
    return answer;
}