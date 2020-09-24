// needs为字符串排列中各个元素出现的次数
// map为s2出现的元素个数
// 出现s2中的元素不在s1中 或者map中的元素x大于needs中元素x出现的次数则更新left指针
var checkInclusion = function (s1, s2) {
  const needs = new Map();
  const map = new Map();
  let left = 0,
    right = 0,
    size = s1.length;

  for (let s of s1) {
    needs.set(s, (needs.get(s) || 0) + 1);
  }

  while (right < s2.length && right - left !== size) {
    let cur = s2[right];
    let curCount = (map.get(cur) || 0) + 1;

    // cur不在needs中
    if (!needs.has(cur)) {
      right++;
      left = right;
      map.clear();
      continue;
    }

    // cur出现的次数大于needs需要的次数
    while (needs.get(cur) < curCount && left < right) {
      const leftcur = s2[left];
      if (leftcur === cur) {
        curCount--;
      }
      map.set(leftcur, map.get(leftcur) - 1);
      left++;
    }

    map.set(cur, curCount);
    right++;
  }
  return right - left === size;
};
