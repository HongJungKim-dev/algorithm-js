function solution(s){
    const lowerCase = s.toLowerCase();
    const pCase = lowerCase.split('p');
    const yCase = lowerCase.split('y');

    return pCase.length === yCase.length;
}