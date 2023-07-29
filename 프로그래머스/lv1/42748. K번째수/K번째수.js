function solution(array, commands) {
    const answer = [];

    return commands.map(([from, to, nth]) => {
        const newArray = array.slice(from - 1, to);
        newArray.sort((a, b) => a - b)
        
        return newArray[nth-1];
    });
}