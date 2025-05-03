function solution(s) {
    let targetWord = '';
    let answer = 0;
    let aCount = 0;
    let bCount = 0;
    for (const char of s) {
      if (targetWord === '') {
          targetWord = char;
          aCount += 1;
          continue;
      }
        
      if (targetWord === char) {
          aCount += 1;
      } else {
          bCount += 1;
      }
        
      if (aCount === bCount) {
          answer += 1;
          targetWord = '';
          aCount = 0;
          bCount = 0;
      }
    }

    if (aCount > 0 || bCount > 0) {
        answer += 1;
    }
    return answer;
}