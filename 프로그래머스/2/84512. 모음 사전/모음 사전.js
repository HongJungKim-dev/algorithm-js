function solution(word) {
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    const alpahbetsLength = alphabets.length;
    const dictionary = [];
    const dfs = (current) => {
        if(current.length > alpahbetsLength) {
            return;
        }
        
        if(current) {
            dictionary.push(current);
        }
        
        
        for(const alphabet of alphabets) {
            dfs(current + alphabet);
        }
    };
    
    dfs('');

    return dictionary.indexOf(word) + 1;
}
