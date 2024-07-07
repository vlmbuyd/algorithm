function solution(my_string) {
    const arr = [];
    for (const el of my_string) {
        if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') {
            continue;
        } else {
            arr.push(el);
        }
    }
    return arr.join('');
}