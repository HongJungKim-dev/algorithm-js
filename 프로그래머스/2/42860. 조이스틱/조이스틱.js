function solution(name) {
    let answer = 0;
   
    let count = 0;
    for(const element of name) {
        const diff = element.charCodeAt(0) - 'A'.charCodeAt(0);
        const fastDiff = Math.min(diff, 26 - diff)
        answer += fastDiff;
    }
    
    let move = name.length - 1;
    for(let i = 0; i < name.length; i++) {
        let next = i + 1;
        while(next < name.length && name[next] === 'A') {
            next += 1;
        }
        
        move = Math.min(move, i * 2 + (name.length - next));
        move = Math.min(move, i + (name.length - next) * 2);
    }

    return answer + move;
}