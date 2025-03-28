function solution(progresses, speeds) {
    const answer = [];
    const days = [];
    
    for (let i = 0; i < progresses.length; i++) {
        const progress = progresses[i];
        const speed = speeds[i];
        const result = Math.ceil((100 - progress) / speed);
        days.push(result)
    }

    let stack = [];
    let max = 0;
    for (const element of days) {
        const target = stack.pop();
        if (target === undefined) {
            max = element;
            stack.push(element);
            continue;
        }
        
        if (max < element) {
            answer.push(stack.length + 1);
            stack = [];
            stack.push(element);
            if(max < element) {
                max = element;
            }
        } else {
            stack.push(target);
            stack.push(element);
        }
        
        
    }

    if (stack.length > 0) {
        answer.push(stack.length);
    }
    
    return answer;
}