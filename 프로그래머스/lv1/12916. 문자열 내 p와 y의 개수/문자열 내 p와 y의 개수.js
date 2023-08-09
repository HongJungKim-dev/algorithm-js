function solution(s){
    const lowerCase = s.toLowerCase();
    const pCase = lowerCase.split('').filter((word) => word === 'p');
    const yCase = lowerCase.split('').filter((word) => word === 'y');

    return pCase.length === yCase.length;
}