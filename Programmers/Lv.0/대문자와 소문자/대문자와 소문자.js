// 풀이1
function solution(my_string) {
    let arr = '';
    const result = [...my_string].map(item =>   
                              item.charCodeAt(0) <= 90 
                              ? arr += item.toLowerCase()   //map 함수라서 굳이 arr+=를 쓸 필요 없음
                              : arr += item.toUpperCase());
    return arr;
}


// 풀이2
function solution(my_string) {
    const result = [...my_string].map(item =>   
                              item.charCodeAt(0) <= 90 
                              ? item.toLowerCase()   
                              : item.toUpperCase());
    return result.join('');
}


// 풀이3
function solution(my_string) {
    const result = [...my_string].map(item =>   
                               item.charCodeAt(0) <= 90 
                               ? String.fromCharCode(item.charCodeAt(0) + 32)   
                               : String.fromCharCode(item.charCodeAt(0) - 32));
    return result.join('');
}