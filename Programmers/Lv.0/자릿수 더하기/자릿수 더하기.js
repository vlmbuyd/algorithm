function solution(n) {
    return [...String(n)].reduce((sum, curr) => sum + Number(curr), 0);
}