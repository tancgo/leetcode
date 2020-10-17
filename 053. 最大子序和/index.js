var maxSubArray = function (nums) {
  // 初始状态
  const dp = [nums[0]];
  let max = dp[0];

  for (let i = 1; i < nums.length; i++) {
    // 状态转移方程
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i];
    } else {
      dp[i] = nums[i];
    }

    max = Math.max(dp[i], max);
  }

  return max;
};

// 空间复杂度可以继续优化
var maxSubArray = function (nums) {
  let ans = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (ans > 0) {
      ans += nums[i];
    } else {
      ans = nums[i];
    }

    max = Math.max(ans, max);
  }

  return max;
};


// 解法二用for of
var maxSubArray = function (nums) {
  let ans = 0
  let max = nums[0]

  for (const n of nums) {
    if (ans > 0) {
      ans +=  n
    } else {
      ans = n
    }

    max = Math.max(ans, max)
  }

  return max
};