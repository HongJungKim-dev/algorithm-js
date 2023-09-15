function solution(s1, s2) {
    const answer = [];
    s2.forEach((element) => {
        s1.forEach((element2) => {
            if (element === element2) {
                answer.push(element)
            }
        })
    })
    return answer.length;
}