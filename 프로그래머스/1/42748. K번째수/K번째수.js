function solution(array, commands) {
    const answer = commands.map((command) => {
        const [start, end, targetIndex] = command;
        const newArray = array.slice(start - 1, end);
        newArray.sort((a, b) => a - b);
        
        return newArray[targetIndex - 1];
    })
    return answer;
}