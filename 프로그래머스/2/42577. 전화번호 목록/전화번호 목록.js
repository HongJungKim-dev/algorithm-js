const updatePrefixSet = (num, prefixSet) => {
    const numLength = num.length;
    for(let i = 0; i < numLength; i++) {
        prefixSet.add(num.slice(0, i));
    }
    
    return prefixSet;
};

function solution(phone_book) {
    let answer = true;
    const prefixSet = new Set();
    for (const element of phone_book) {
        updatePrefixSet(element, prefixSet)
    }
    
    for (const element of phone_book) {
        if (prefixSet.has(element)) {
            answer = false;
            break;
        }
    }
    return answer;
}