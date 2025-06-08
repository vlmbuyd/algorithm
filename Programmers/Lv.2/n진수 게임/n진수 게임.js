function solution(n, t, m, p) {
  const convertToEn = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  let str = "";
  let i = 0;
  // 0부터의 숫자를 n진법으로 변환하여 string으로 저장
  while (str.length <= m * t + p) {
    str += i.toString(n).toUpperCase();
    i++;
  }

  // str을 t번 순회하며 첫 항이 p이고, 공차가 m인 등차수열 인덱스의 요소를 answer에 push
  let answer = "";
  for (let i = 0; i < t; i++) {
    answer += str[m * i + p - 1]; // 공차가 m인 등차수열
  }

  return answer;
}
