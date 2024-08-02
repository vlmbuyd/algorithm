function solution(num) {
    let count = 0;

    if (num === 1){
        return 0;
    }else {
        while (num !== 1) {
            num % 2 === 0 ? num /= 2 : num = num * 3 + 1
            count++;
            if (count === 500) return -1;
        }
        return count;
    }
}