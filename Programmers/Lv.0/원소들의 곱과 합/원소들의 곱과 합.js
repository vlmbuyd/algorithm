function solution(num_list) {
    let multiply = num_list.reduce((multi, curr) => multi * curr, 1);
    let sum = num_list.reduce((sum, curr) => sum + curr, 0);

    return multiply < sum ** 2 ? 1 : 0;
}