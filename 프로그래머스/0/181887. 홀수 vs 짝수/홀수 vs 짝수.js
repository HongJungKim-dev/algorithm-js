function solution(num_list) {
    var answer = 0;
    let evenSum = 0; // 짝수 합
    let oddSum = 0; // 홀수 합
    const numListLength = num_list.length;
    
    for(let i = 0; i < numListLength; i++) {
        const nth = i + 1;
        const num = num_list[i];
        if(nth % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    
    return evenSum > oddSum ? evenSum : oddSum;
}