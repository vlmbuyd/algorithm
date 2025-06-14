function solution(msg) {
  const answer = [];
  let message = msg;

  // 사전 초기화
  const dic = [];
  for (let i = 0; i < 26; i++) dic.push(String.fromCharCode(i + 65));

  let searchIdx = 0;

  while (message.length > 0) {
    // 사전에 해당 문자열과 일치하는 것이 존재할 때는 뒤에 문자열을 하나씩 붙여가며 다시 비교
    let w = message.slice(0, searchIdx + 1);

    // 사전에 존재할 때
    if (dic.includes(w) && searchIdx + 1 <= message.length) {
      searchIdx++;

      // 만약 w가 마지막까지 도달했다면 여기서 처리
      if (searchIdx + 1 > message.length) {
        answer.push(dic.indexOf(w) + 1);
        break;
      }
      continue;
    } else {
      // 사전에 존재하지 않을 때

      // 사전에 등록
      dic.push(w);

      // 바로 직전 숫자까지 출력
      answer.push(dic.indexOf(message.substring(0, searchIdx)) + 1);

      // 출력값 제거
      message = message.substring(searchIdx);

      searchIdx = 0;
    }
  }

  return answer;
}
