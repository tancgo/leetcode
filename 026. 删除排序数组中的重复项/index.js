// 双指针
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;
  let left = 0;
  let right = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    right++;

    if (nums[right] !== nums[left]) {
      left++;
      nums[left] = nums[right];
    }
  }

  return left + 1;
};

// 优化后，right可直接用for循环代替
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;
  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[left]) {
      left++;
      nums[left] = nums[right];
    }
  }

  return left + 1;
};
