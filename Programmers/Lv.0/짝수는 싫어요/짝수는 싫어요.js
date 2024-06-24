function solution(n) {
    const answer = [...new Array(n)]
    .map((_, i) => i + 1)
    .filter(item => item % 2 !== 0);
    return answer;
}