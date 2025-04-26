function solution(k, dungeons) {
    let count = 0;
    const dungeonsLength = dungeons.length;
    const used = Array(dungeonsLength).fill(false);
    const dungeonsCases = new Set();
    let max = 0;
    
    const dfs = (arr) => {
        if(arr.length === dungeonsLength) {
            dungeonsCases.add(arr);
            return;
        }
            
        for(let i = 0; i < dungeonsLength; i++) {
            if(!used[i]) {
                used[i] = true;
                dfs([...arr, dungeons[i]]);
                used[i] = false;
            }
        }
        
    }
    dfs([]);
    for(const dungeonCase of dungeonsCases) {
        let current = k;
        const dungeonCaseLength = dungeonCase.length;
        
        for(const dungeon of dungeonCase) {
            const [min, cost] = dungeon;
            if(current < min) {
                break;
            } 
            current -= cost;
            count += 1;
        }
        if(max < count) {
            max = count;
        }
        count = 0;
    }
    return max;
}