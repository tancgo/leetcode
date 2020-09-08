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

// 变种题，不允许连续爬两步

/** 当n为5时， 用「剩下要爬的楼梯数」作为节点值，没有限制的话有8种方法可以爬到楼顶，去掉连续爬两步的路径之后，只剩下6种方法
  *                  5
  *          3              4
  *       1     2        2      3
  *       0   0   1    0   1   1   2
  *                               0  1 
  * 
  * 从上面的树可以总结出规律：
  * 思路：f(n) = f(n-1)+f(n-2)

   如果是f(n-2),说明爬了两步到达n层，则需要记录该状态，他的上一步只能是爬一步；

   如果是f(n-1)，说明爬了一步到达n层，记录该状态，他的上一步可以是一步或者两步；

   综上：

   f(n, status) = f(n-1, 1)+f(n-2,2);
  */
var climbStairs = function (n) {
  var countNumber = (n, status) => {
    if (n < 1) return 0;
    if (n === 1) return 1;

    if (n === 2) {
      if (status === 2) return 1; // 上一步走的是两步的话，则只能走一步
      if (status === 1 || status === 0) return 2; // 上一步走的是一步的话，则只能走一步或者两步
    }

    if (n > 2) {
      if (status === 0 || status === 1) {
        return countNumber(n - 1, 1) + countNumber(n - 2, 2);
      }

      if (status === 2) {
        return countNumber(n - 1, 1);
      }
    }
  };

  return countNumber(n, 0);
};
