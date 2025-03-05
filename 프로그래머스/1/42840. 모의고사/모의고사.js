function solution(answers) {
    const answer = [];
    const answersLength = answer.length;
    const firstPattern = [1, 2, 3, 4, 5];
    const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdPattern= [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const first = Array.from(({ length: answers.length}), (_, index) => firstPattern[index % firstPattern.length]);
    const second = Array.from(({ length: answers.length}), (_, index) => secondPattern[index % secondPattern.length]);
    const third = Array.from(({ length: answers.length}), (_, index) => thirdPattern[index % thirdPattern.length]);
    let firstCount = 0;
    let secondCount = 0;
    let thirdCount = 0;

    for (let i = 0 ; i < answers.length; i++) {
        if (answers[i] === first[i]) {
            firstCount += 1;
        }
        
        if (answers[i] === second[i]) {
            secondCount += 1;
        }
        
        if (answers[i] === third[i]) {
            thirdCount += 1;
        }
    }
    
    const maxCount = Math.max(firstCount, secondCount, thirdCount);
    
    if (maxCount === firstCount) {
        answer.push(1)
    }
    
    if (maxCount === secondCount) {
        answer.push(2)
    }
    
    if (maxCount === thirdCount) {
        answer.push(3)
    }
    
    return answer;
}