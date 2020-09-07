// dp数组记录每一个节点的值，存在浪费
var climbStairs = function (n) {
  const dp = [1, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp);
  return dp[n];
};

// 对上面的方法做优化，只记住两个值，当前值和上一个值
var climbStairs = function (n) {
  let pre = 1;
  let cur = 1;

  for (let i = 2; i <= n; i++) {
    console.log(pre, cur);
    /**
       * pre  cur  
       * 1    1
         1    2
         2    3
         3    5
       */
    [pre, cur] = [cur, pre + cur]; // 当前的cur = 上次cur + 上次pre , pre = 上次cur
  }

  return cur;
};
