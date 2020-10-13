/**
 * 验证子串 s[left..right] 是否为回文串
 */
var validPalindromic = function (s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// 解法一 暴力匹配  时间复杂度O(N^3)
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return s;

  let maxLen = 1;
  let start = 0;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (j - i + 1 > maxLen && validPalindromic(s, i, j)) {
        maxLen = j - i + 1;
        start = i;
      }
    }
  }

  return s.substring(start, start + maxLen);
};
