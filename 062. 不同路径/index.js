// 动态规划填表方法
var uniquePaths = function (m, n) {
  if (!m || !n) return 0;

  // 构建dp表格
  const dp = Array.from(Array(m), () => Array(n));

  // 状态初始化
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  // 状态转移方程
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
/**
 * 
[
  [1, 1, 1, 1, 1, 1, 1],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 3, 6, 10,15, 21, 28]
]
 */

// 动态规划空间复杂度优化，改成一维数组
// 一行一行往下加

var uniquePaths = function (m, n) {
  const dp = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1];
    }
  }
  return dp[n - 1];
};
