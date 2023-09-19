function calculate(price) {
    let multi = 1;
    const dividedPrice = price / 10000;
    if (dividedPrice >= 10 && dividedPrice < 30) {
        multi -= 0.05;
    } else if (dividedPrice >= 30 && dividedPrice < 50) {
        multi -= 0.1;
    } else if (dividedPrice >= 50) {
        multi -= 0.2;
    }
    return Math.floor(price * multi);
}

function solution(price) {
    return calculate(price);
}