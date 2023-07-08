function solution(answers) {
    const answer = [];
    const aAnswer = [1, 2, 3, 4, 5]
    const bAnswer = [2, 1, 2, 3, 2, 4, 2, 5]
    const cAnswer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const aLen = aAnswer.length;
    const bLen = bAnswer.length;
    const cLen = cAnswer.length;
    
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;

    answers.forEach((correctAnswer, index) => {
        const aIndex = index % aLen 
        const bIndex = index % bLen
        const cIndex = index % cLen
        
        const currentA = aAnswer[aIndex];
        const currentB = bAnswer[bIndex];
        const currentC = cAnswer[cIndex];
        
        if (correctAnswer === currentA) {
            aCount += 1;
        }
        
        if (correctAnswer === currentB) {
            bCount += 1;
        }
        
        if (correctAnswer === currentC) {
            cCount += 1;
        }        
    })
    
    const counts = [aCount, bCount, cCount];
    const maxCount = Math.max(...counts)
    counts.forEach((currentCount, index) => {
        if (currentCount === maxCount) {
            answer.push(index + 1)
        }
    })
    answer.sort((a, b) => a - b);
    return answer;
}