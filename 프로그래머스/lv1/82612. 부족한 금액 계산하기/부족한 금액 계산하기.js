function solution(price, money, count) {
    const firstPrice = price;
    const lastPrice = price * count;
    const needPrices = (firstPrice + lastPrice) * count / 2;
    const diff = needPrices - money;
    return diff > 0 ?  diff : 0;
}