// 给定一个数组 形如[1,1,2,3,3,3,3,4,6,6,6] 给定一个数n , 例如3，找出给定的数n在数组中出现的次数，要求时间复杂度小于O(n)
const arr = [1, 1, 2, 3, 3, 3, 3, 4, 6, 6, 6];

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

var search = function (nums, target) {
  const right = searchRangeright(nums, target);
  const left = searchRangeLeft(nums, target)

  return left === -1 ? 0 : right - left + 1
};

console.log(search(arr, 3));
