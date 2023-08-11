function solution(s)
{
    let answer = 0;
    const arr = [];
    
    for (const word of s) {
        if (arr.length === 0) {
            arr.push(word);
            continue;
        }
        
        const peek = arr[arr.length - 1];
        
        if (peek === word) {
            arr.pop();
            continue;
        }
        
        arr.push(word);
    }

    return arr.length === 0 ? 1 : 0;
}