/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 双指针
const twoSum = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  const result = [];

  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum === target) {
     return [start+1, end+1];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
};

// 哈希表
const twoSum = function (nums, target) {
  let map = new Map();
  const len = nums.length;
  for(i=0;i<len;i++) {
      let temp = target - nums[i]
      if(map.has(temp)) return [map.get(temp) + 1, i + 1];
      map.set(nums[i], i)
  }
};