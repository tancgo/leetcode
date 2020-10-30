var generateParenthesis = function (n) {
  const res = [];

  function dfs(str, left, right) {
    if (str.length === n * 2) {
      res.push(str);
      return;
    }

    // 只要左括号有剩，可以选它，继续递归做选择
    if (left > 0) {
      dfs(str + "(", left - 1, right);
    }

    // 右括号的保有数量大于左括号的保有数量，才能选右括号
    if (right > left) {
      dfs(str + ")", left, right - 1);
    }
  }

  // 递归的入口，初始字符串是空字符串，初始括号数量都是n
  dfs("", n, n);

  return res;
};
