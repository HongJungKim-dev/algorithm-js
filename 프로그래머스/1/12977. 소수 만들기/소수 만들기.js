function solution(nums) {
    const sums = [];
    const checkIsPrime = (num) => {
        if(num < 2) {
            return false;
        }
        
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                return false;
            }
            
        }
        
        return true;
    }
    const visited = Array.from({ length: nums.length }, () => false);
    const targetLength = 3;
    const sumSet = new Set();
    
    const dfs = (arr, start, path) => {
        if(path.length === targetLength) {
            const sum = path.reduce((acc, cur) => acc + cur, 0);
            sums.push(sum);
            return;
        }
        
        for(let i = start; i < arr.length; i++) {
            dfs(arr, i + 1, [...path, arr[i]]);
        }
    };
    dfs(nums, 0, []);

    const targets = sums.filter((num) => checkIsPrime(num));

    return targets.length;
}