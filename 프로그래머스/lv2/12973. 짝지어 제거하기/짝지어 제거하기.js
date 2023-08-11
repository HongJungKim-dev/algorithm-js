function solution(s)
{
    const arr = [];
    
    for (const word of s) {
        const arrLen = arr.length;
        const peek = arr[arrLen - 1];

        if (arrLen === 0 || peek !== word) {
            arr.push(word);
            continue;
        }
        
        arr.pop();
    }

    return arr.length === 0 ? 1 : 0;
}