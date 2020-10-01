// 双指针解法
var trap = function (height) {
  const len = height.length;
  let high = 1;
  let right = len - 1;
  let left = 0;
  let sum = 0;
  let temp = 0;

  while (left <= right) {
    while (left <= right && height[left] < high) {
      sum += height[left];
      left++;
    }

    while (left <= right && height[right] < high) {
      sum += height[right];
      right--;
    }

    high++;
    temp += right - left + 1;
  }

  return temp - sum;
};
