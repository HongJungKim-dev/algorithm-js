function solution(participant, completion) {
    let answer = '';
    participant.sort();
    completion.sort();

    const participantLen = participant.length;
    for (let i = 0; i < participantLen; i++) {
        const target = participant[i];
        if (target !== completion[i]) {
            answer = target;
            break;
        }
    }
    
    return answer;
}
