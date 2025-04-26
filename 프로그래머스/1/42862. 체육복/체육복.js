function solution(n, lost, reserve) {
    let borrowCount = 0;
    // 바로 앞, 뒷번호 빌려주기
    // 여벌 학생의 도난 중복 제거
    const newLost = lost.filter((element) => !reserve.includes(element));
    const newReserve = reserve.filter((element) => !lost.includes(element));
    // 정렬
    newLost.sort((a, b) => a - b);
    newReserve.sort((a, b) => a - b);

    for(const element of newLost) {
        const target = newReserve.findIndex((el) => el === element - 1);
        if (newReserve.lenght === 0) {
            break;
        }
        if (target >= 0) {
            newReserve.splice(target, 1);
            borrowCount += 1;
        } else {
            const nextTarget = newReserve.findIndex((el) => el === element + 1);
            if (nextTarget >= 0) {
                newReserve.splice(nextTarget, 1);
                borrowCount += 1;
            }   
        }
    }
    
    const noHasCase = newLost.length - borrowCount;

    return n - noHasCase;
}