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
