function solution(k, score) {
    const answer = [];
    const all = [];
    let records = [];
    const scoreLength = score.length;
    
    for (const element of score) {
        if (records.length < k) {
            records.push(element);
            records.sort((a, b) => b - a)
            answer.push(records[records.length - 1]);
            continue;
        }
        const min = records.pop();

        if (min < element) {
            records.push(element);
        } else {
            records.push(min)
        }
        records.sort((a, b) => b - a)
        answer.push(records[records.length - 1]);
    }
    
    return answer;
}