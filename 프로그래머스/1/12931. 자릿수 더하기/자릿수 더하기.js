function solution(n)
{
    const nums = n.toString().split('');
    const sum = nums.reduce((acc, cur) => acc + Number(cur), 0);

    return sum;
}