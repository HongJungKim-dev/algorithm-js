function solution(num_list) {
    const multi = num_list.reduce((acc, cur) => acc * cur, 1);
    const sum = num_list.reduce((acc, cur) => acc + cur, 0);

    return multi < sum ** 2 ? 1 : 0;
}