function solution(arr) {
    const num = Math.min(...arr);
    return arr.length === 1 ? [-1] : arr.filter(item => item !== num);
}