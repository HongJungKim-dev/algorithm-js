function solution(n, k) {
    const meatPrice = 12000;
    const beveragePrice = 2000;
    const num = k - Math.floor(n / 10);
    
    return meatPrice * n + beveragePrice * num;
}