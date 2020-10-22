var countSquares = function (matrix) {
  let count = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  // 生成表
  const dp = Array.from(Array(m), () => Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!i || !j) {
        // 首行或者首列时为原值为正方形子矩阵个数
        dp[i][j] = matrix[i][j];
      } else if (!matrix[i][j]) {
        // matrix[i][j] 为0 时代表该点没有正方形子矩阵
        dp[i][j] = 0;
      } else {
        // 该点和左、左上、上三点是否构成为正方形子矩阵，取决于最小的数，为0时代表不能构成，为1时代表可构成为1的子矩阵，为2时代表可以构成为2的子矩阵，以此类推
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
      count += dp[i][j];
    }
  }

  return count;
};
