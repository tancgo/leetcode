var minPathSum = function (grid) {
  // 创建dp
  const dp = [...grid];

  const m = dp.length;
  const n = dp[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // dp[0][0] 为初始值
      if (i === 0 && j === 0) continue;

      // 填表
      if (i === 0) dp[i][j] += dp[i][j - 1]
      if (j === 0) dp[i][j] += dp[i - 1][j]
      if (i && j) dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m - 1][n - 1];
};
