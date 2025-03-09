function solution(strings, n) {    
    const newStrings = strings.slice();
    newStrings.sort((a, b) => {
        const aIndexN = a[n];
        const bIndexN = b[n];
        
        if (aIndexN < bIndexN) {
            return -1;
        }
        
        if (bIndexN > aIndexN) {
            return 1;
        }
        
        if (aIndexN === bIndexN) {
            if (a <b) {
                return -1;
            } 
            
            if (b > a) {
                return 1;
            }
            
            if (a === b) {
                return 0;
            }
        }
    });
    
    return newStrings;
}