function solution(num_list) {
    const even = num_list.filter((element) => element % 2 === 0);
    const odd = num_list.filter((element) => element % 2 !== 0);

    return [even.length, odd.length];
}