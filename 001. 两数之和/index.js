/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力破解
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
    console.log(i, "i");
    for (j = i + 1; j < nums.length; j++) {
      console.log(j, "j");
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// 哈希表

var twoSum = function (nums, target) {
  const map = new Map();
  const len = nums.length;

  for (i = 0; i < len; i++) {
    let temp = target - nums[i];
    if (map.has(temp)) return [map.get(temp), i];
    map.set(nums[i], i);
  }
};

// 题目还是 TwoSum，但是这时需要你返回所有可能的情况（不重复），并且数组中允许重复元素的出现。
const twoSum = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  const result = [];

  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum === target) {
      result.push([start, end]);
      start++;
      end--;

      while (start < end && nums[end] === nums[end + 1]) {
        end--;
      }

      while (start < end && nums[start] == nums[start - 1]) {
        start++;
      }
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }

  return result;
};
console.log(twoSum([1, 2, 2, 3, 4], 5));
