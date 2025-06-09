function solution(N, stages) {
  const reachedPeople = new Array(N).fill(0); // 각 스테이지별 도달한 사람 수
  const failedPeople = new Array(N).fill(0); // 각 스테이지별 실패한 사람 수

  for (const el of stages) {
    // 해당 사람이 도달한 스테이지 채우기
    for (let i = 0; i < el; i++) {
      // 클리어한 사람일 시 N+1 스테이지는 추가하지 않음
      if (i === N) continue;
      reachedPeople[i]++;
    }

    // 아직 클리어 하지 못한 스테이지에 대한 사람들 리스트 채우기
    if (el === N + 1) continue;
    else failedPeople[el - 1]++;
  }

  // 실패율 구하기
  const failed = new Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    // 스테이지 도달 유저 없을 때 예외처리
    if (reachedPeople[i] === 0) failed[i] = { stage: i + 1, value: 0 };
    failed[i] = { stage: i + 1, value: failedPeople[i] / reachedPeople[i] };
  }

  // 각 스테이지 별로 실패율 정렬
  failed.sort((a, b) => {
    if (a.value !== b.value) return b.value - a.value; // 실패율 내림차순
    return a.stage - b.stage; // 스테이지 번호 오름차순
  });

  return failed.map((v) => v.stage);
}
