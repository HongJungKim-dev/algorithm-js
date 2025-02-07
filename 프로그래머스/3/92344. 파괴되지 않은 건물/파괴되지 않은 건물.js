function solution(board, skill) {
    let answer = 0;
    const copyBoard = board.map(row => [...row]);  
    let n = board.length;
    let m = board[0].length;
    
    const diff = Array.from(({ length: n + 1}), () => Array(m + 1).fill(0))

    
    for (let [type, n1, m1, n2, m2, power] of skill) {
        const value = type === 1 ? (-1) * power : power;
        diff[n1][m1] += value;
        diff[n2+1][m2+1] += value;
        diff[n1][m2+1] -= value;
        diff[n2+1][m1] -= value;
    }
    
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            diff[i][j] += diff[i][j-1]
        }
    }
    
    for (let j = 0; j <= m; j++) {
        for (let i = 1; i <= n; i++) {
            diff[i][j] += diff[i-1][j]
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            copyBoard[i][j] += diff[i][j];
            if (copyBoard[i][j] > 0) {
                answer += 1;
            }
        }
    }
    
    return answer;
}