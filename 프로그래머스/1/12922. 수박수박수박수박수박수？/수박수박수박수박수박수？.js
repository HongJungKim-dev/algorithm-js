function solution(n) {
    const character = '수박';
    character.repeat(Math.ceil(n / 2));
    const repeatNum = Math.ceil(n / 2);
    return character.repeat(repeatNum).slice(0, n);
}