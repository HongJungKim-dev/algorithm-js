function checkPrime(num) {
    if (num === 2) {
        return true;
    }
    const sqrt = Math.floor(Math.sqrt(num))
    for (let i = 2; i <= sqrt; i++) {
                    
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}
function solution(nums) {
    let answer = 0;
    const numsLength = nums.length;
    for (let i = 0; i < numsLength; i++) {
        for (let j = i + 1; j < numsLength; j++) {
            for (let k = j + 1; k < numsLength; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                
                const isPrime = checkPrime(sum);
                if (isPrime) {
                    answer += 1;
                }
            }
        }
    }
    
    return answer;
}