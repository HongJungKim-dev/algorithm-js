function solution(name, yearning, photo) {
    const answer = [];
    const obj = {};
    name.forEach((el, index) => {
        if (obj[el] === undefined) {
            obj[el] = yearning[index];
        }
    })

    for (const candidates of photo) {
        const scores = candidates.map((el) => {
            return obj[el] ? obj[el] : 0
        });
        const sum = scores.reduce((acc, cur) => acc + cur, 0)
        answer.push(sum);
    }
    return answer;
}