function solution(arr1, arr2) {
    let answer = [];
    const rowLength = arr1.length;
    const colLength = arr1[0].length;
    
    for (let i = 0; i < rowLength; i++) {
        const row = [];
        for (let j = 0; j < colLength; j++) {
            const sum = arr1[i][j] + arr2[i][j];
            row.push(sum);
        }
        
        answer.push(row);
    }
    
    return answer;
}