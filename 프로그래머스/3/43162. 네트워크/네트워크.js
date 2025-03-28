

function solution(n, computers) {
    const visited = Array.from(({ length: n }), () => false);

    let count = 0;
    
    const bfs = (startNode) => {
        const queue = [startNode];
        visited[startNode] = true;

        while(queue.length > 0) {
            const currentNode = queue.shift();
            for (let i = 0; i < n; i++) {
                if(!visited[i] && computers[currentNode][i] === 1) {
                    queue.push(i);
                    visited[i] = true;
               }
            }
        }

    }
        
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            bfs(i);
            count += 1;
        }
    }
    return count;
}