var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;

  while (left < right) {
    const flag = Math.min(height[left], height[right]);
    res = Math.max(res, (right - left) * flag);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return res;
};
