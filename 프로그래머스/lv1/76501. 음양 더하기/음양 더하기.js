function solution(absolutes, signs) {
    var answer = 123456789;
    return absolutes.map((num, index) => {
        const sign = signs[index]
        return sign ? num : -num
    }).reduce((acc, cur) => acc + cur, 0);
}