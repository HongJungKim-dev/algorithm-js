function solution(nums) {
    const targetSelectNum = nums.length / 2;
    const numsSet = new Set([...nums]);
    const numsSetLength = [...numsSet].length;
    return numsSetLength >= targetSelectNum ? targetSelectNum : numsSetLength
}