function solution(s){
    const arr = s.split('')
    const stack = [];
    for(const element of arr) {
        const target = stack.pop();
        if (target === undefined) {
            stack.push(element)
            continue;
        }
        if (element === ')' && target === '(') {
            continue;
        }
        
        stack.push(target);
        stack.push(element);
    }

    return stack.length ===0;
}