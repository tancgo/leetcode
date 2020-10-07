// 滑动窗口
var minSubArrayLen = function (s, nums) {
  const n = nums.length;
  if (n < 1) return 0

  let res = Infinity;
  let start = 0;
  let end = 0;
  let sum = 0;

  while (end < n) {
    sum += nums[end]
    while (sum >= s) {
      res = Math.min(res, end - start + 1)
      sum -= nums[start]
      start++
    }
    end++
  }

  return res !== Infinity ? res : 0

};