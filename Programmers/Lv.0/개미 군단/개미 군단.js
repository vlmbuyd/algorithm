function solution(hp) {
    let result = 0;
    for (let i = 5; i > 0; i-=2) {
        if (i <= hp) {
            result += Math.floor(hp / i);
            hp = hp % i;
        }
    }
    return result;
}