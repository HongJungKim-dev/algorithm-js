function solution(money) {
    var answer = [];
    const price = 5500;
    const num = Math.floor(money / price);

    return [num, money - num * price];
}