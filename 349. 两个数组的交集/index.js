/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// set
var intersection = function (nums1, nums2) {
  return [...new Set(nums1)].filter((item) => nums2.includes(item));
};

// 双指针法
var intersection = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let res = new Set();

  while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
          i++;
      } else if (nums1[i] > nums2[j]) {
          j++;
      } else {
          res.add(nums1[i]);
          i++;
          j++;
      }
  }

  return [...res]
}