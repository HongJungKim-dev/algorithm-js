function solution(s) {
    const isEven = s.length % 2 === 0;
    const oddCase = Math.floor(s.length / 2);
    const from = isEven ? s.length / 2 : oddCase;
    const to = from + 1;

    return isEven ? s.slice(from -1, to) : s.slice(from, to);
}