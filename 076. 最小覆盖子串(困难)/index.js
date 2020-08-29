/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 滑动窗口
var minWindow = function (s, t) {
  let left = 0; // 左指针
  let right = 0; // 右指针
  const need = new Map(); // 字符串t的种类及个数

  for (const i of t) {
    need.set(i, need.get(i) ? need.get(i) + 1 : 1);
  }

  let needType = need.size; // 需要的字符种类个数
  let res = "";

  console.log(need, "need");

  while (right < s.length) {
    const cur = s[right]; // 右指针对应的值

    if (need.has(cur)) {
      need.set(cur, need.get(cur) - 1);

      if (need.get(cur) === 0) needType -= 1;
    }

    while (needType === 0) {
      console.log(s.substring(left, right + 1));

      const newRes = s.substring(left, right + 1);
      if (!res || newRes.length < res.length) res = newRes;

      const pre = s[left];
      if (need.has(pre)) {
        need.set(pre, need.get(pre) + 1);

        if (need.get(pre) === 1) needType += 1;
      }
      left += 1;
    }

    right += 1;
  }

  return res;
};

const s = "ADOBECODEBANC";
const t = "ABC";

console.log(minWindow(s, t), "result");
