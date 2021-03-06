// 假设给出的不同面额的硬币是[1, 2, 5]，目标是 120，问最少需要的硬币个数？
// dp[i]: 表示总金额为 i 的时候最优解法的硬币数
// 1.拿一枚面值为 1 的硬币 + 总金额为 119 的最优解法的硬币数量
// 这里我们只需要假设总金额为 119 的最优解法的硬币数有人已经帮我们算好了，
// 不需要纠结于此。(虽然一会也是我们自己算，哈哈)
// 即：dp[119] + 1
// 2.拿一枚面值为 2 的硬币 + 总金额为 118 的最优解法的硬币数
// 这里我们只需要假设总金额为 118 的最优解法的硬币数有人已经帮我们算好了
// 即：dp[118] + 1
// 3.拿一枚面值为 5 的硬币 + 总金额为 115 的最优解法的硬币数
// 这里我们只需要假设总金额为 115 的最优解法的硬币数有人已经帮我们算好了
// 即：dp[115] + 1

// 所以，总金额为 120 的最优解法就是上面这三种解法中最优的一种，也就是硬币数最少
// 的一种，我们下面试着用代码来表示一下：

// dp[120] = Math.min(dp[119] + 1, dp[118] + 1, dp[115] + 1);

// 推导出「状态转移方程」：
// dp[i] = Math.min(dp[i - coin] + 1, dp[i - coin] + 1, ...)
var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(Infinity); // 首位为0， 设置Infinity方便后面取最小值
  dp[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }

  // console.log(dp)
  return dp[amount] === Infinity ? -1 : dp[amount];
};
