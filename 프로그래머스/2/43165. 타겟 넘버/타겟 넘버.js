function solution(numbers, target) {
    var answer = 0;
    let count = 0;
    
    function dfs(index, sum) {
        
        if (index === numbers.length) {
            if (sum === target) {
                count +=1 ;
            }
            return;
        }
        
        dfs(index + 1, sum - numbers[index]);
        
        dfs(index + 1, sum + numbers[index]);
    }
    
    dfs(0, 0)
    
    return count;
}