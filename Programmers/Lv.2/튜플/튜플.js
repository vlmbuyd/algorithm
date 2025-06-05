function solution(s) {
  const answer = [];

  // 1. 문자열 파싱
  const tmp = s.split("},{");

  tmp[0] = tmp[0].slice(2); // 첫 번째 요소 {{ 잘라내기

  const last = tmp.length - 1;
  tmp[last] = tmp[last].slice(0, -2); // 마지막 요소 }} 잘라내기

  tmp.sort((a, b) => a.length - b.length); // 원소 크기가 작은 순서대로 배치

  const parsingList = tmp.map((i) => i.split(","));

  // 2. answer에 순서대로 push (단, 기존에 존재하는 요소는 제외)
  for (let i = 0; i <= parsingList.length - 1; i++) {
    for (let j = 0; j <= parsingList[i].length - 1; j++) {
      if (!answer.includes(parsingList[i][j])) answer.push(parsingList[i][j]);
    }
  }

  return answer.map((i) => Number(i));
}
