// needs为字符串排列中各个元素出现的次数
// map为s2出现的元素个数
// 出现s2中的元素不在s1中 或者map中的元素x大于needs中元素x出现的次数则更新left指针
var checkInclusion = function (s1, s2) {
  const needs = new Map();
  const exists = new Map();
  let left = 0;
  let right = 0;
  let size = s1.length;

  for (let s of s1) {
    needs.set(s, (needs.get(s) || 0) + 1);
  }

  while (right < s2.length && right - left !== size) {
    const cur = s2[right];
    let curCount = (exists.get(cur) || 0) + 1;

    if (!needs.has(cur)) {
      exists.clear();
      right++;
      left = right;
      continue;
    }

    // cur出现的次数大于needs需要的次数，则需要将left更新至cur第一次出现的下一个点
    while (needs.get(cur) < curCount && left < right) {
      const leftCur = s2[left];
      if (leftCur === cur) {
        curCount--;
      }

      exists.set(leftCur, exists.get(leftCur) - 1);
      left++;
    }

    exists.set(cur, curCount);
    right++;
  }

  return right - left === size;
};
