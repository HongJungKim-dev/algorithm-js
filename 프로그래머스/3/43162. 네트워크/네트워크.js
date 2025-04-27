

function solution(n, computers) {
    let answer = 0;
    const visited = Array.from({ length: n }, () => false);
    const dfs = (index) => {
        if(index === n) {
            return;
        }
        
        visited[index] = true;
        
        for(let i = 0; i < n; i++) {
            if(computers[index][i] === 1 && !visited[i]) {
                  dfs(i);
             }   
        }
    };
    
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i);
            answer += 1;
        }
        
    }
    
    return answer;
}