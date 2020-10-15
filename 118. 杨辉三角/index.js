var generate = function (numRows) {
  if (!numRows) return [];

  /** 首先构造一张二维数组
   * [
   *   [ empty ],
   *   [ empty x 2 ],
   *   [ empty x 3 ],
   *   [ empty x 4 ],
   *   [ empty x 5 ]
   *  ]
   */
  const dp = Array.from(Array(numRows), (_, index) => Array(index + 1));

  /** 初始状态, 首尾均为1
   * [
   *   [ 1 ],
   *   [ 1, 1 ],
   *   [ 1, empty, 1 ],
   *   [ 1, empty, empty, 1 ],
   *   [ 1, empty, empty, empty, 1 ] 
   * ]
   */
  for (let i = 0; i < numRows; i++) {
    dp[i][i] = 1;
    dp[i][0] = 1;
  }

  // 状态转移方程填表 dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
  // [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
  for (let i = 2; i < numRows; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }

  return dp;
};
