// 回溯法，在39题的基础上跳过了某些情况
var combinationSum2 = function (candidates, target) {
  const res = [];

  candidates.sort((a, b) => a - b);

  const dfs = (target, temp, begin) => {
    if (target < 0 || begin > candidates.length) return;

    if (target === 0) {
      const n = temp.slice();
      // if (!res.some(item => JSON.stringify(item) === JSON.stringify(n))) {
      //   res.push(n)
      // }
      res.push(n);
      return;
    }

    for (let i = begin; i < candidates.length; i++) {
      // 同一层循环中避免数字重复
      if (i > begin && candidates[i] === candidates[i - 1]) continue;
      const cur = candidates[i];
      temp.push(cur);
      // 从i+1开始 避免重复
      dfs(target - cur, temp, i + 1);
      temp.pop();
    }
  };

  dfs(target, [], 0);

  return res;
};
