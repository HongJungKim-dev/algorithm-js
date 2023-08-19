function solution(s){
    const temp = [];
    const sLength = s.length;
    for (let i = 0; i < sLength; i++) {
        if (temp.length === 0) {
            temp.push(s[i]);
            continue;
        }
        const popped = temp.pop();
        
        if (popped === '(' && s[i] === ')') {
            continue;
        }
        
        temp.push(popped);
        temp.push(s[i]);
    }
    
    return temp.length === 0;
}