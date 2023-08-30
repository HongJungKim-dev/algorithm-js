function solution(num_list) {
    var answer = 0;
    const evenGroup = num_list.filter((num) => num % 2 === 0).map((element) => `${element}`);
    const oddGroup = num_list.filter((num) => num % 2 !== 0).map((element) => `${element}`);

    return Number(evenGroup.join('')) + Number(oddGroup.join(''));
}