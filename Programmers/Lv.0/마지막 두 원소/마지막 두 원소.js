function solution(num_list) {
    const [prev, last] = [num_list[num_list.length-2], num_list[num_list.length-1]];
    return last > prev ? [...num_list, last-prev] : [...num_list, last * 2];
}