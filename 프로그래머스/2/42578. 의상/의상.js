function solution(clothes) {
    let answer = 1;
    const clothesObj = {};
    for(const cloth of clothes) {
        const category = cloth[1];
        if (clothesObj[category] === undefined) {
            clothesObj[category] = 1;
        } else {
            clothesObj[category] += 1;
        }
    }
    
    const caseCounts = Object.values(clothesObj);
    for(const caseCount of caseCounts) {
        answer *= (caseCount + 1);
    }

    return answer - 1;
}