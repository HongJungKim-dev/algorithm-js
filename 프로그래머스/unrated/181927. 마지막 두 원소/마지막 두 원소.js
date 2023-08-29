function solution(num_list) {
    const answer = num_list.slice();
    const last = num_list.pop();
    const prev = num_list.pop();
    const value = prev < last ? last - prev : last * 2;
    answer.push(value);
    return answer;
}