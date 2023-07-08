function solution(food) {
    let answer = '';
    const copyFood = food.slice();
    const calculatedFood = copyFood.map((currentFood) => Math.floor(currentFood / 2))
    const foodLen = food.length
    for (let i = 0; i < foodLen; i++) {
        if (i > 0) {
            const len = calculatedFood[i]
            for (let j = 0; j < len; j++) {
                answer += i
            }
        }   
    }
  
    const reversedAnswer = answer.split('').reverse().join('')
    return `${answer}0${reversedAnswer}`;
}