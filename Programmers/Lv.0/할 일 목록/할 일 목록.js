function solution(todo_list, finished) {
    const arr = [];
    finished.map((item, index) => item === false ? arr.push(todo_list[index]) : null)
    return arr;
}