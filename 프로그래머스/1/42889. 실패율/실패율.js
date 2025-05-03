function solution(N, stages) {
    const answer = [];
    const stagesLength = stages.length;
    const fails = Array.from({ length: stagesLength }, () => 0);
    const failRates = Array.from({ length: N }, () => 0);
    const stageNumNrate = [];
    let acc = 0;
    for(let i = 0; i < stagesLength; i++) {
        const stage = stages[i];
        fails[stage - 1] += 1;
    }
    
    for(let i = 0; i < N; i++) {
        const fail = fails[i];
        failRates[i] = fail / (stagesLength - acc);
        acc += fail;
    }
    
    for(let i = 0; i < N; i++) {
        stageNumNrate.push({
            stageNum: i + 1,
            rate: failRates[i],
        })
    }
    
    stageNumNrate.sort((a, b) => {
        if(a.rate < b.rate) {
            return 1;
        } else if(a.rate > b.rate) {
            return -1;
        } else {
            if(a.stageNum > b.stageNum) {
                return 1;
            } else if(a.stageNum < b.stageNum) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    return stageNumNrate.map((element) => element.stageNum);
}