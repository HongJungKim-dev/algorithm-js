function solution(participant, completion) {
    const obj = {};
    for (const element of participant) {
        const target = obj[element];
        if (target) {
            obj[element] = target + 1;
        } else {
            obj[element] = 1;
        }
    }
    
    for (const element of completion) {
        const target = obj[element];

        if (target) {
            obj[element] = target - 1;
        } 
    }
    
    for (const key in obj) {
        const value = obj[key];
        if (value) {
            answer = key;
        }
    }
    
    return answer;
}