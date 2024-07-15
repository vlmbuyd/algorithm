function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((sum, curr) => sum + curr, 0) : num_list.reduce((sum, curr) => sum * curr, 1);
}