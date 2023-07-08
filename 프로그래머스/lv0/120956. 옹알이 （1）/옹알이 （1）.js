function solution(babbling) {
    let answer = 0;
    const candidates = ['aya', 'ye', 'woo', 'ma'];
    const alternateWord = 'B'
    babbling.forEach((element) => {
        let temp = element;
        candidates.forEach((candidate) => {
            temp = temp.replace(candidate, alternateWord);
        })
        
        const tempLen = temp.length
        let newTemp = temp;
        for (let i = 0; i < tempLen; i++) {
            temp = temp.replace(alternateWord, '')
        }

        if (temp === '') {
            answer += 1;
        }
    })
    
    return answer;
}