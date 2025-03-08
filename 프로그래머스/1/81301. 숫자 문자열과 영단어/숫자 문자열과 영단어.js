function solution(s) {
    var answer = 0;
    const dictionary = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    console.log(s.indexOf('one'))
    //console.log(Object.keys(dictionary))
    
    for (const [word, digit] of Object.entries(dictionary)) {
        s = s.split(word).join(digit)
    }

    return Number(s);
}