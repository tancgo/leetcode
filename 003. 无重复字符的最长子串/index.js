// 数组滑动窗口,记录字符串
var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let max = 0;

  for (i = 0; i < s.length; i++) {
    if (arr.includes(s[i])) {
      arr.splice(0, arr.indexOf(s[i]) + 1);
    }

    arr.push(s[i]);
    max = Math.max(arr.length, max);
  }

  return max;
};

// 双指针记录下标
var lengthOfLongestSubstring = function (s) {
  let max = 0;

  for (let i = 0, j = 0; j < s.length; j++) {
    const index = s.substring(i, j).indexOf(s[j]);
    if (index !== -1) {
      i = index + 1 + i; // index 是子串的下标  所以还需要加i
    }
    max = Math.max(max, j - i + 1);
  }

  return max;
};

// Map进行优化，双指针滑动窗口记录开始结束下标
var lengthOfLongestSubstring1 = function (s) {
  let map = new Map();
  let max = 0;

  for (let left = 0, right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      // 更新开始下标left
      // left = map.get(s[right]) + 1; // abbcdea,当移动到最右a的时候，map.has(s[right])仍为true， 需要增加处理
      left = Math.max(map.get(s[right]) + 1, left); // 当更新后的left指针小于原left指针时，不更新
    }

    max = Math.max(max, right - left + 1);
    map.set(s[right], right);
  }

  return max;
};

lengthOfLongestSubstring1("abbcdea");
