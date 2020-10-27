// 回溯
//[2,3,6,7]
// 7
var combinationSum = function (candidates, target) {
  const res = [];

  const dfs = (target, temp, id) => {
    if (id === candidates.length) return;

    // console.log(temp, 'ans')
    if (target === 0) {
      res.push(temp);
      return;
    }

    console.log(target, temp, candidates[id + 1], "a");
    // 直接跳过, 避免重复路径
    dfs(target, temp, id + 1);

    target -= candidates[id];

    if (target >= 0) {
      console.log(target, [...temp, candidates[id]], candidates[id], "b");
      // 选择当前数
      dfs(target, [...temp, candidates[id]], id);
    }
  };

  dfs(target, [], 0);

  console.log(res);
  return res;
};

// 另一种回溯方法  更直观易理解
var combinationSum1 = function (candidates, target) {
  const res = [];

  const dfs = (target, temp, begin) => {
    if (target < 0) return;

    if (target === 0) {
      res.push(temp.slice());
      return;
    }

    for (let i = begin; i < candidates.length; i++) {
      // 加入本次选择
      temp.push(candidates[i]);
      // 往下继续选择，同时target减去当前数字
      dfs(target - candidates[i], temp, i);
      // 撤销上一步的选择
      temp.pop();
    }
  };

  dfs(target, [], 0);

  // console.log(res);
  return res;
};
