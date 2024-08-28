function solution(arr) {
    let answer = 0;
    const subset = arr.reduce((acc, val) => {
        return acc.concat(acc.map(set => [...set, val]));
    }, [[]]);

    for (const el of subset) {
        if (el.length === 3 && el.reduce((acc, curr) => acc + curr, 0) === 0) answer++;
    }
    return answer;
}