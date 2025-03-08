function getCombinations(arr, selectNum) {
    const result = [];
    function backtrack(start, combination) {
        if (combination.length === selectNum) {
            result.push([...combination]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            combination.push(arr[i]);
            backtrack(i + 1, combination);
            combination.pop();
        }
    }
    backtrack(0, []);
    return result;
}


function solution(number) {
    var answer = 0;
    const res = getCombinations(number, 3);
    const results = res.map((arr) => arr.reduce((acc,cur) => acc + cur, 0));
    const sumZeroCases = results.filter((result) => result === 0)
    return sumZeroCases.length;
}