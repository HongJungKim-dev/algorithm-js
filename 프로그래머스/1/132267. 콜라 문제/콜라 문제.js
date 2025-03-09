function solution(a, b, n) {
    const cost = a;
    const profit = b;
    let totalEmpty = n;
    const temp = [];
    let answer = 0;
    
    while(true) {
        if (totalEmpty < cost) {
            break;
        }
        const divided = Math.floor(totalEmpty / cost);
        const remain = totalEmpty % cost;
        answer += divided * profit;
        totalEmpty = divided * profit + remain;
    }
   
    return answer;
}