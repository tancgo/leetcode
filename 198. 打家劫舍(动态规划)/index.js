// 输入：[1,2,3,1]
// 每件房屋对应的最大打劫金额为[ 0, 1, 2, 4, 4 ]

// 输入：[2,7,9,3,1]
// 每件房屋对应的最大打劫金额为[ 0, 2, 7, 11, 11, 12 ]

// 由此可总结规律为f(n) = max(f(n-2)+num[n], f(n-1))

var rob = function (nums) {
  if (!nums.length) return 0;

  const dp = [0, nums[0]];

  for (i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1]);
  }
  console.log(dp);

  return dp[dp.length - 1];
};

// 空间复杂度优化
var rob = function (nums) {
  if (!nums.length) return 0;

  let pre = 0;
  let mid = nums[0];

  for (i = 2; i <= nums.length; i++) {
    const next = Math.max(nums[i - 1] + pre, mid);
    pre = mid;
    mid = next;
  }

  return mid;
};
