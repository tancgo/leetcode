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