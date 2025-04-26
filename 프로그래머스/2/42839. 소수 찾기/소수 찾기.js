function solution(numbers) {
    const used = Array(numbers.length).fill(false);
    const numbersLength = numbers.length;
    const dictionary = new Set();
    const primes = [];
    const dfs = (current) => {
        if(current.length > numbersLength) {
            return;
        }
        
        if(current) {
            dictionary.add(Number(current));
        }
        for(let i = 0; i < numbersLength; i++) {
            const number = numbers[i];
            if(!used[i]) {
                used[i] = true;
                dfs(current + number);
                used[i] = false;
            }
        }
    };
    
    dfs('');
    
    const checkIsPrime = (num) => {
        if (num < 2) {
            return false;
        }
        let isPrime = true;
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if((num % i) === 0) {
                return false;
            }
        }
        
        return true;
    };
    
    for(const num of dictionary) {
        const isPrime = checkIsPrime(Number(num));
        if(isPrime) {
            primes.push(num);
        }
    }

    return primes.length;
}