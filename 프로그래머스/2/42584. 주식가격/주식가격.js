function solution(prices) {
    const pricesLength = prices.length;
    const answer = Array.from(({ length: pricesLength }), () => 0);
    for (let i = 0; i < pricesLength; i++) {
        let minusCount = 0;
        let count = 0;
        for(let j = i + 1; j < pricesLength; j++) {
            const price = prices[i];
            const targetPrice = prices[j];
            if (price > targetPrice) {
                count += 1;
                break;
            }
            count += 1;
        }
        answer[i] = count;
    }

    return answer;
}