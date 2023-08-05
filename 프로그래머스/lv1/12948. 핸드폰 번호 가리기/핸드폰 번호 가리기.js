function solution(phone_number) {
    const visibleNum = 4;
    const invisibleCharacter = '*';
    
    const answer = invisibleCharacter.repeat(phone_number.length - visibleNum) + phone_number.slice(visibleNum * -1);

    return answer;
}