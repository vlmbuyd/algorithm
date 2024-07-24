// 풀이 1
function solution(num_list) {
    let odd_sum = 0;
    let even_sum = 0;

    for (let i = 0; i < num_list.length; i++) {
        i % 2 === 0 ? even_sum += num_list[i] : odd_sum += num_list[i];    
        console.log(even_sum);
    }

    return odd_sum > even_sum ? odd_sum : even_sum;
}

//풀이 2
function solution(num_list) {
    const odd_sum = num_list.reduce((sum, curr, idx) => idx % 2 === 0 ? sum + curr : sum, 0);
    const even_sum = num_list.reduce((sum, curr, idx) => idx % 2 !== 0 ? sum + curr : sum, 0);

    return odd_sum > even_sum ? odd_sum : even_sum;
}