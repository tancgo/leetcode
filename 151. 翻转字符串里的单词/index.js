// 库函数方法
var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((item) => item !== "")
    .reverse()
    .join(" ");
};

// 双指针方法
var reverseWords = function (s) {
  s = s.trim();
  let left = (right = 0);
  const res = [];

  while (right <= s.length - 1) {
    // 左指针为空时移动左指针
    if (s[left] === " ") {
      left++;
    }

    // 右指针为空且左指针不为空时将子串放入数组中
    if (s[right] === " " && s[left] !== " ") {
      res.push(s.substring(left, right));
      left = right;
    }

    // 当右指针到达最大边界时， 字串放入数组中
    if (right === s.length - 1) {
      res.push(s.substring(left, right + 1));
    }

    // 更新右指针
    right++;
  }

  return res.reverse().join(" ");
};
