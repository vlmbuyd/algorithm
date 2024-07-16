function solution(numbers, n) {
    let sum = 0;
    for (const el of numbers) {
        sum += el;
        if (sum > n) {
            return sum;
        }
    }
}