function solution(s) {
    const answer = [];
    let candidates = [];
    for (alphabet of s) {
        candidates.push(alphabet);
      //  if (candidates.length > 0) {
            const prevs = [];
            let count = 0;
            let hasEqual = false;
            while(candidates.length > 0) {
                count += 1;
                const target = candidates.unshift();
                console.log(target)
                if (target === alphabet) {
                    hasEqual = true;
                    break;
                } 
                prevs.push(target);
                
            }
            candidates = [...candidates, ...prevs];
            hasEqual ? answer.push(count) : answer.push(-1)
            
            
        // } else {
        //     candidates.push(alphabet);
        // }
    }
    return answer;
}