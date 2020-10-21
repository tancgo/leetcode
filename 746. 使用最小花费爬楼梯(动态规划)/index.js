var minCostClimbingStairs = function (cost) {
  const dp = [];

  // 初始化
  dp[0] = cost[0];
  dp[1] = cost[1];

  // cost最后一个值也要相加，所以增加一个值为0的空台阶
  cost.push(0);
  const n = cost.length;

  // 状态转移方程
  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
  }

  return dp[n - 1];
};

// 空间复杂度简化
var minCostClimbingStairs = function (cost) {
  const dp = [];
  let pre = cost[0];
  let cur = cost[1];
  cost.push(0);
  const n = cost.length;

  for (let i = 2; i < n; i++) {
    const next = Math.min(pre, cur) + cost[i];
    [pre, cur] = [cur, next];
  }

  return cur;
};
