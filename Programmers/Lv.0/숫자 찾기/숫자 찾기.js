// 풀이1
function solution(num, k) {
    const answer = String(num).indexOf('' + k);
    return answer === -1 ? answer : answer + 1;
}


// 풀이2
function solution(num, k) {
    return String(num).indexOf('' + k) + 1 || -1;
}