function solution(food) {
    var answer = '';
    const food1 = food.slice(1).map((el) => Math.floor(el / 2));
    const food2 = food1.slice().sort((a, b) => b - a);
    
    const food1String = food1.map((el, index) => `${index + 1}`.repeat(el)).join('');
    const food2String = food1String.split('').slice().reverse().join('');

    return food1String + '0' + food2String;
}