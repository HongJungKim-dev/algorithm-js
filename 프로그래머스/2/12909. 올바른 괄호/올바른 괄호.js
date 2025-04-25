function solution(s){
    const arr = s.split('')
    const stack = [];
    
    for (const element of arr) {
        if (element === '(') {
            stack.push(element);
        } else if (element === ')') {
            if (stack.length === 0) {
                stack.push(element);
                continue;
            }
            const popped = stack.pop();
            if (popped !== '(') {
                stack.push(popped);
            }
        }
    }

    return stack.length === 0;
}