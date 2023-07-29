function solution(price, money, count) {
    const prices = Array.from({ length: count}, (_, index) => price * (index + 1));
    const needPrices = prices.reduce((acc, cur) => acc + cur, 0);
    const diff = needPrices - money;
    return diff > 0 ?  diff : 0;
}