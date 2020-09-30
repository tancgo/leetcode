var findLengthOfLCIS = function (nums) {
  if(!nums.length) return 0
  let max = 1;
  let left = 0;
  let right = 0;

  for (let i = 0; i < nums.length - 1; i++) {
      // console.log(nums[i + 1] , nums[i])
      right++
      if (nums[i + 1] > nums[i]) {
          max = Math.max(max, right - left + 1)
          //    console.log(right, left, max, 'max')
      } else {
          left = right
      }

  }

  return max
};