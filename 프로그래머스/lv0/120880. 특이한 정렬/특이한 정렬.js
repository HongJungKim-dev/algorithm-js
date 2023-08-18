function solution(numlist, n) {
  numlist.sort((a, b) => {
    const diffA = n - a;
    const diffB = n - b;

    if (Math.abs(diffA) < Math.abs(diffB)) {
        return -1;
    } else if (Math.abs(diffA) > Math.abs(diffB)) {
        return 1;
    } else {
        if (diffA < diffB) {
            return -1;
        } else if (diffA > diffB) {
            return 1;
        }
    }
  });
  return numlist;
}
