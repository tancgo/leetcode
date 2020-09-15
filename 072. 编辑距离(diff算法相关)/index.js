/**
 * i/j       r      o      s
 *     0     1      2      3
 *
 * h   1     1      2      3
 *
 * o   2     2      1      2
 *
 * r   3     2      2      2
 *
 * s   4     3      3      2
 *
 * e   5     4      4      3
 */

//  如果最后一个字母相同，则dp[i][j] = dp[i-1][j-1]
//  否则dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
//  dp[i][j] = dp(i - 1, j) + 1      删除  dp[2][1]  ho --> ro-->  r
//  dp[i][j] = dp(i, j - 1) + 1      插入: dp[2][3]  ho --> ro + s --> ros
//  dp[i][j] = dp(i - 1, j - 1) + 1  替换: dp[3][3]  hor --> ro(r) --> ros
//  dp[i][j] = dp(i - 1, j - 1)      无须操作: dp[4][3] hors --> ros(hor变为ro)

var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  if (!m * n) return m + n;

  // 初始化
  const dp = Array.from(Array(m + 1), () => Array(n + 1));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // dp
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        word1[i - 1] !== word2[j - 1]
          ? Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
          : dp[i - 1][j - 1];
    }
  }

  return dp[m][n];
};
