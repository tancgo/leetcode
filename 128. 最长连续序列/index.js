// 排序处理 时间复杂度O(nlogn)
var longestConsecutive = function (nums) {
  const len = nums.length
  if (len <= 1) return len
  nums = nums.sort((a, b) => a - b)
  let max = 1
  let count = 1

  for (let i = 0; i < len - 1; i++) {
    let cur = i
    let next = i + 1

    // 相同就跳过本次循环
    if (nums[next] === nums[cur]) continue

    if (nums[next] === nums[cur] + 1) {
      // 发现连续项 count++
      count++
    } else {
      // 否则，count重置1
      count = 1
    }

    max = Math.max(max, count)
  }

  return max

};