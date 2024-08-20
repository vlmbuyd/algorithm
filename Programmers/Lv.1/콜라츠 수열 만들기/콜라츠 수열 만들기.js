function solution(n) {
    const answer = [];
    while(n !== 1) {
        answer.push(n);
        n % 2 === 0 ? n /= 2 : n = n * 3 + 1;
    }
    answer.push(n);

    return answer;
}