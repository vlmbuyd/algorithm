function solution(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = i % 2 === 0 ? sum += i : sum; 
    }
    return sum;
}