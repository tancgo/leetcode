var restoreIpAddresses = function (s) {
  const res = [];

  const dfs = (subRes, start) => {
    if (subRes.length === 4 && start === s.length) {
      // 满4段，且用光所有字符
      res.push(subRes.join("."));
      return;
    }

    if (subRes.length == 4 && start < s.length) {
      // 满4段，但还没用光字符,直接返回
      return;
    }

    for (let len = 1; len <= 3; len++) {
      if (start + len - 1 >= s.length) return; // 指针超出边界了

      if (len !== 1 && s[start] === "0") return; // 不能是0x、0xx

      const str = s.substring(start, start + len); // 当前选择切出的片段

      if (len === 3 && (str | 1) > 255) return; // 不能超过255

      subRes.push(str); // 作出选择
      dfs(subRes, start + len); // 基于这种选择，向下选择
      subRes.pop(); // 撤销最后的选择，回到之前的状态
    }
  };

  dfs([], 0);

  return res;
};
