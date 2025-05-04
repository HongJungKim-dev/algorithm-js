function solution(phone_number) {
    let answer = [];
    const phoneNums = phone_number.split('');
    const phoneLength = phoneNums.length;
    phoneNums.reverse();
    for(let i = 0; i < phoneLength; i++) {
        if(i > 3) {
            answer.push('*');
        } else {
            answer.push(phoneNums[i])
        }
    }
    answer.reverse();
    return answer.join('');
}