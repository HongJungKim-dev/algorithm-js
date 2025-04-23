function solution(progresses, speeds) {
    let stack = [];
    const answer = [];
    const progressesLength = progresses.length;
    let count = 0;
    for (let i = 0; i < progressesLength; i++) {
        const progress = progresses[i];
        const remain = 100 - progress;
        const speed = speeds[i];
        const cost = Math.ceil(remain / speed);
        
        if (stack.length === 0) {
            stack.push(cost);
            continue;
        }
        
        const max = Math.max(...stack);
        
        if (max < cost) {
            answer.push(stack.length);
            stack = [cost];
        } else {
            stack.push(cost);
        }
    }
    
    if (stack.length > 0) {
        answer.push(stack.length);
    }
    
    return answer;
}