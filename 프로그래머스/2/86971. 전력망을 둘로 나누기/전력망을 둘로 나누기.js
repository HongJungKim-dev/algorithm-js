function solution(n, wires) {
    let answer = Infinity;
    
    const createGraphWithoutLine = (wires, exceptIndex) => {
        const graph = Array.from({ length: n + 1 }, () => []);
        wires.forEach(([a, b], index) => {
            if(index !== exceptIndex) {
                graph[a].push(b);
                graph[b].push(a);
            }
        })
        
        return graph;
    };
    
    const dfs = (node, graph, visited) => {
        visited[node] = true;
        let count = 1;
        
        for(const next of graph[node]) {
            if(!visited[next]) {
                count += dfs(next, graph, visited)
            }
        }
        
        return count;
    };
    
    for (let i = 0; i < wires.length; i++) {
        const graph = createGraphWithoutLine(wires, i);
        const visited = Array(n + 1).fill(false);
        const count = dfs(1, graph, visited);
        const diff = Math.abs((n - count) - count);
        
        answer = Math.min(answer, diff);
    }
    return answer;
}