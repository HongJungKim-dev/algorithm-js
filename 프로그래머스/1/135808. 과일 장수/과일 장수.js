function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);
    
    let index = 0;
    while(true) {
        const arr = score.slice(index, index + m);
        const currentCalc = arr[arr.length - 1] * m * 1;
        if (index > score.length) {
            break;
        }
        
        if (arr.length === m) {
            answer += currentCalc;
        }
       
        index += m;
    }
    return answer;
}
