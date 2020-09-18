// https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/dong-tai-gui-hua-she-ji-fang-fa-zhi-pai-you-xi-jia/

// [10,9,2,5,3,7,101,18]
// [1,1,1,1,1,1,1,1]  dp
// [1,1,1,1,1,1,1,1] i = 1
// [1,1,1,1,1,1,1,1] i = 2
// [1,1,1,2,1,1,1,1] i = 3
// [1,1,1,2,2,1,1,1] i = 4
// [1,1,1,2,2,3,1,1] i = 5
// [1,1,1,2,2,3,4,1] i = 6
// [1,1,1,2,2,3,4,4] i = 7
// if(nums[i] > nums[j]) && dp[i] = Math.max(dp[j], dp[i]+1)

// 时间复杂度o(n^2)
var lengthOfLIS = function (nums) {
  const len = nums.length;
  if (!len) return 0;
  const dp = Array.from(Array(len), () => 1); // dp base 每个元素地长度起码为1 所以填充了1

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    console.log(dp, i);
  }

  let max = 1;

  for (let i = 0; i < dp.length; i++) {
    max = Math.max(max, dp[i]);
  }
  return max;
};

// 时间复杂度优化为O(NlogN)
var lengthOfLIS = function (nums) {
  const len = nums.length;
  if (len <= 1) return len;
  const tail = [nums[0]];

  for (let i = 1; i < len; i++) {
    if (nums[i] > tail[tail.length - 1]) {
      tail.push(nums[i]);
    } else {
      let left = 0;
      let right = tail.length - 1;

      // 二分查找
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[i] > tail[mid]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tail[left] = nums[i];
    }
  }

  return tail.length;
};
