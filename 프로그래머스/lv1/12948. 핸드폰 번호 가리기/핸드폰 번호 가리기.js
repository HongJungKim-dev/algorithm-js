function solution(phone_number) {
    const reverseNumbers = phone_number.split('').reverse();
    const answer = reverseNumbers.map((num, index) => {
        if (index >= 4) {
            return '*'
        } else {
            return num;
        }
    }).reverse().join('');

    return answer;
}