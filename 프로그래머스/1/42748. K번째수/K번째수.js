function solution(array, commands) {
    const answer = commands.map((command) => {
        const [start, end, targetIndex] = command;
        const slicedArr = array.slice(start - 1, end).sort((a, b) => a - b);
        return slicedArr[targetIndex - 1]
    })
    return answer;
}