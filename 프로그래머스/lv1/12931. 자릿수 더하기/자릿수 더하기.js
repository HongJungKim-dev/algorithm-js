function solution(n)
{
    return `${n}`.split('').map((num) => Number(num))
                .reduce((acc, cur) => acc + cur, 0);
}