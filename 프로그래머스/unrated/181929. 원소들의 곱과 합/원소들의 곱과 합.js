function solution(num_list) {

    let multi = 1;
    for (const element of num_list) {
        multi *= element;
    }
    const sum = num_list.reduce((acc, cur) => acc + cur, 0);

    return multi < sum ** 2 ? 1 : 0;
}