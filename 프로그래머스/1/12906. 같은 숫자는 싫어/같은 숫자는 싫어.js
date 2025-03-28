function solution(arr){
    const answer = [];
    
    let prev = 0;
    for (let i = 0; i < arr.length; i++) {
    const target = arr[i];
        while (i < arr.length) {
            i += 1;
            if (target !== arr[i]){
                answer.push(target);
                i -= 1;
                break;
            }
        }
    }
    return answer
}