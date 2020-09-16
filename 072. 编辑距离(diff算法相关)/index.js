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

//  如果最后一个字母相同，则dp[i][j] = dp[i-1][j-1]  时间复杂度为O(m*n)
//  否则dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
//   replace |  delete
//   skip    |
//   ------------------
//   insert  |  dp[i][j]

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

// 优化空间复杂度，降低为O(2*min(m, n))，只需保存两行数据
/**
 * [ 0, 1, 2, 3 ]
   [ 1, 1, 2, 3 ]
   [ 2, 2, 1, 2 ]
   [ 3, 2, 2, 2 ]
   [ 4, 3, 3, 2 ]
   [ 5, 4, 4, 3 ]
 */

var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  let cur = Array.from(Array(n + 1), (item, index) => index); // 第一行
  let next = []; // 第二行
  for (let i = 1; i <= m; i++) {
    next[0] = i; //  第二行第一个元素赋值
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        next[j] = cur[j - 1]; // skip
      } else {
        next[j] = Math.min(next[j - 1], cur[j], cur[j - 1]) + 1; // replace/insert/delete
      }
    }
    [cur, next] = [next, []]; // 将next交换给cur，同时将next置为空
  }
  return cur[cur.length - 1];
};

// 在上一个版本上空间复杂度继续优化，降低为O(min(m, n))，只存一行数组和dp[i-1][j-1]

var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  let dp = Array.from(Array(n + 1), (item, index) => index); // dp当前行
  let corner; // dp[m-1][n-1]
  for (let i = 1; i <= m; i++) {
    corner = dp[0];
    dp[0] = i; // 更新dp[m-1][n-1]
    for (let j = 1; j <= n; j++) {
      const temp = dp[j]; // 缓存
      if (word1[i - 1] === word2[j - 1]) {
        dp[j] = corner; // skip
      } else {
        dp[j] = Math.min(dp[j - 1], dp[j], corner) + 1; // replace/insert/delete
      }
      corner = temp; // 更新dp[m-1][n-1]
    }
  }
  return dp[dp.length - 1];
};
