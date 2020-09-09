// 将环形拆成两个线性dp 最后取两个的最大值即可
var rob = function (nums) {
  if (!nums.length) return 0;

  if (nums.length === 1) return nums[0];

  const dp1 = [0, nums[0]]; // 打劫第一间则放弃最后一间
  const dp2 = [0, nums[1]]; // 打劫最后一间则放弃第一间

  for (let i = 2; i <= nums.length - 1; i++) {
    dp1[i] = Math.max(nums[i - 1] + dp1[i - 2], dp1[i - 1]);
  }

  for (let j = 2; j < nums.length; j++) {
    dp2[j] = Math.max(nums[j] + dp2[j - 2], dp2[j - 1]);
  }

  // console.log(dp1,dp2)
  return Math.max(dp1.pop(), dp2.pop());
};