// 第一版 used记录了使用过的下标  includes来检测是否存在
var permuteUnique = function (nums) {
  const res = [];

  nums.sort((a, b) => a - b);

  function dfs(temp, used) {
    if (temp.length === nums.length) {
      res.push(temp.slice());

      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == nums[i - 1] && used.includes(i - 1) && i > 0) continue;
      if (used.includes(i)) continue;

      const cur = nums[i];

      temp.push(cur);
      used.push(i);
      dfs(temp, used);
      temp.pop();
      used.pop();
    }
  }

  dfs([], []);

  return res;
};

// 第二版优化  used记录布尔值  对应的下标即为使用与否
var permuteUnique = function (nums) {
  const res = [];

  nums.sort((a, b) => a - b);

  function dfs(temp, used) {
    if (temp.length === nums.length) {
      res.push(temp.slice());

      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == nums[i - 1] && used[i - 1] && i > 0) continue;
      if (used[i]) continue;

      const cur = nums[i];

      temp.push(cur);
      used[i] = true;
      dfs(temp, used);
      temp.pop();
      used[i] = false;
    }
  }

  dfs([], []);

  return res;
};
