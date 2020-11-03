// 计算左边界
function searchRangeLeft(nums, target) {
  let right = nums.length - 1;
  let left = 0;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    const cur = nums[mid];

    if (cur === target) {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid;
      }

      right = mid - 1;
    } else if (cur > target) {
      right = mid - 1;
    } else if (cur < target) {
      left = mid + 1;
    }
  }

  return -1;
}

// 计算右边界
function searchRangeright(nums, target) {
  let right = nums.length - 1;
  let left = 0;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    const cur = nums[mid];

    if (cur === target) {
      if (mid === nums.length - 1 || nums[mid + 1] > target) {
        return mid;
      }

      left = mid + 1;
    } else if (cur > target) {
      right = mid - 1;
    } else if (cur < target) {
      left = mid + 1;
    }
  }

  return -1;
}

function searchRange(nums, target) {
  return [searchRangeLeft(nums, target), searchRangeright(nums, target)];
}
