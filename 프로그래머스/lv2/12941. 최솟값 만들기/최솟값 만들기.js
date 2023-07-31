function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    let sum = 0;
    const aLength = A.length;
    for (let i = 0; i < aLength; i++) {
        sum += A[i] * B[i];
    }
    return sum;
}