function includesOneToNine(str) {
    const regex = /[1-9]/;
    return regex.test(str);
}

function solution(str) {
    let answer = '';
    
    for (const el of str) {
        if ((el !== '0') || (el === '0' && includesOneToNine(answer))) {
            answer += el;
        }
    }
    return answer;
}