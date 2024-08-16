function solution(d, budget) {
    const arr = d.sort((a, b) => a - b);
    let count = 0;
  
    for (const el of arr) {
      budget -= el;
      if (budget >= 0) count++;
      else break;
    }
    return count;
  }