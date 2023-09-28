function solution(n) {
    const nums = Array.from({ length: n }, (_, index) => index + 1);
    return nums.filter((num) => n % num === 0).length;
}