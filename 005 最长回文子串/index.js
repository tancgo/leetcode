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

// 解法二 动态规划
// 测试用例 "babad"
/**
 * [
     [true, false, true, false, false],
     [null, true, false, true, false],
     [null, null, true, false, false],
     [null, null, null, true, false],
     [null, null, null, null, true],
];
 */

var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return s;

  let maxLen = 1;
  let start = 0;

  const dp = Array.from(Array(len), () => Array(len));

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        // cbbd这种情况需要判断一下 不然dp[i][j] = dp[i + 1][j - 1]=dp[2][1] = null
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        start = i;
      }
    }
  }

  return s.substring(start, start + maxLen);
};

// 解法二中的表实际上只用了一半 可以优化空间
/**
 * 
 [
  [ true ],
  [ false, true ],
  [ true, false, true ],
  [ false, true, false, true ],
  [ false, false, false, false, true ]
]
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return s;

  let maxLen = 1;
  let start = 0;

  const dp = Array.from(Array(len), (_, index) => Array(index + 1));

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        // cbbd这种情况需要判断一下 不然dp[i][j] = dp[i - 1][j + 1]=dp[1][2] = null
        if (i - j < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i - 1][j + 1];
        }
      }

      if (dp[i][j] && i - j + 1 > maxLen) {
        maxLen = i - j + 1;
        start = j;
      }
    }
  }

  return s.substring(start, start + maxLen);
};
