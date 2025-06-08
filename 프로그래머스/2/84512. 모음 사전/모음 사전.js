function solution(word) {
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    const dict = [];
    const alphabetsLength = alphabets.length;
    const dfs = (current) => {
        if(current.length > alphabetsLength) {
            return;
        }
        
        if(current) {
            dict.push(current);
        }
        
        for(const alphabet of alphabets) {
            dfs(current + alphabet);   
        }
    }
    dfs('');
    
    return dict.indexOf(word) + 1;
}
