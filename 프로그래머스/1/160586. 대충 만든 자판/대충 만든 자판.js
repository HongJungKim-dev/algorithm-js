function solution(keymap, targets) {
    const answer = [];
    const hash = {};
    
    for (const group of keymap) {
        for (let i = 0; i < group.length; i++) {
            const key = group[i];
            if (hash[key] === undefined) {
                hash[key] = i + 1;
            } else if (hash[key] > i + 1) {
                hash[key] = i + 1;
            }
        }
    }
    
    for (const target of targets) {
        let result = 0;
        for (const alphabet of target) {
            const count = hash[alphabet];
            if (count !== undefined) {
                result += count;
            } else {
                result = -1;
                break;
            }
            
        }
        answer.push(result)
    }

    return answer;
}