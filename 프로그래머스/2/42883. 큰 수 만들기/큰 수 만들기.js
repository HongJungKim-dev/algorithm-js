function solution(number, k) {
    const sortedNumber = number.split('').sort((a, b) => b - a).join('');
    const numberLength = number.length;
    const targetLength = numberLength - k;

    const stack = [];
    for(const element of number) {
        if(k === 0) {
            stack.push(element);
            continue;
        }
        
        if(stack.length === 0) {
            stack.push(element);
            continue;
        }
        
        while(k > 0 && stack.length > 0 && stack[stack.length -1] < element) {
            stack.pop();
            k -= 1;
        };
        
        stack.push(element);
    }
 
    const newNum = stack.slice(0, targetLength);

    return newNum.join('');
}