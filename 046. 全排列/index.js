// 回溯递归
var permute = function (nums) {
  const result = [];

  const backtrack = (path) => {
    if (path.length === nums.length) {
      result.push(path);
      return;
    }
    nums.forEach((n) => {
      if (path.includes(n)) return;

      backtrack(path.concat(n));
    });
  };
  backtrack([]);
  return result;
};

// 练习回溯算法时  第二次做该题
var permute = function (nums) {
  const res = [];

  function dfs(temp) {
    // console.log(temp)
    if (temp.length === nums.length) {
      res.push(temp.slice());

      return;
    }

    for (const n of nums) {
      if (temp.includes(n)) continue;
      temp.push(n);
      dfs(temp);
      temp.pop();
    }
  }

  dfs([]);

  return res;
};
