function solution(x) {
    const str = `${x}`;
    let divider = 0;
    
    for (const element of str) {
        divider += Number(element);
    }

    return x % divider === 0;
}