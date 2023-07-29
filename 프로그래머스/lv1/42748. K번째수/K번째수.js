function solution(array, commands) {
    const answer = [];
    
    for (const [from, to, nth] of commands) {
        const newArray = array.slice(from - 1, to)
        newArray.sort((a, b) => a - b)
        answer.push(newArray[nth - 1])
    }
    return answer;
}