let decimal = "";

function convertToDecimal(num, n) {
  // 나머지를 붙이며 문자열로 누적
  decimal += String(num % 2);

  // 몫이 0이면 재귀 종료
  if (Math.floor(num / 2) === 0) {
    // 누적된 비트 열을 뒤집어 올바른 순서로 복원
    const bin = decimal.split("").reverse().join("").padStart(n, "0");
    decimal = ""; // 전역 누적 변수 초기화
    return bin; // 길이 n짜리 이진 문자열 반환
  } else {
    // 몫이 남아있으면 재귀 호출
    return convertToDecimal(Math.floor(num / 2), n);
  }
}

function solution(n, arr1, arr2) {
  const answer = [];

  // 각각 이진 문자열 배열로 반환
  const arr1Dec = arr1.map((item) => convertToDecimal(item, n));
  const arr2Dec = arr2.map((item) => convertToDecimal(item, n));

  // 2차원 순회하며 비트 OR 결과를 '#' 또는 ' '로 치환
  for (let i = 0; i < n; i++) {
    let tmp = "";
    for (let j = 0; j < n; j++) {
      if (arr1Dec[i][j] === "0" && arr2Dec[i][j] === "0") {
        tmp += " ";
      } else tmp += "#";
    }
    answer.push(tmp);
    tmp = "";
  }

  return answer;
}
