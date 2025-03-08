function solution(s) {
    var answer = '';
    const words = s.split(' ');
    const newWords = [];
    let newStrings = [];
    for (word of words) {
        let newWord = '';
        for (let i = 0; i < word.length; i++) {
            const transformedWord = i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
            
            newWord += transformedWord
        }
        newStrings.push(newWord)
    }
    return newStrings.join(' ');
}