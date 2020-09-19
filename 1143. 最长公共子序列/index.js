// 首先填一个dp table
// base case填充0
/**
 * [
    [ 0, 0, 0, 0 ],
    [ 0, 1, 1, 1 ],
    [ 0, 1, 1, 1 ],
    [ 0, 1, 2, 2 ],
    [ 0, 1, 2, 2 ],
    [ 0, 1, 2, 3 ]
]
 */

var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0)); // base case
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      // 状态转移方程
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};
