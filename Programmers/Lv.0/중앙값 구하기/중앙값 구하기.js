function solution(array) {
    const answer = array.sort((a,b) => a - b);
    const middle = Math.floor(array.length / 2);
    return answer[middle];
}