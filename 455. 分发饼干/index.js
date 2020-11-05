var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let n = 0;
  // console.log(g, s)

  s.forEach((item) => {
    if (item >= g[n]) n++;
  });
  return n;
};

// 第二次自己做  方法比别人的复杂了 = =
var findContentChildren = function (g, s) {
  let count = 0;
  let start = 0; // 遍历起始位置

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  for (let i = 0; i < g.length; i++) {
    for (let j = start; j < s.length; j++) {
      if (g[i] <= s[j]) {
        count++;
        start = j + 1;
        break;
      }
    }
  }

  return count;
};

// 优化 不用双层for循环了
var findContentChildren = function (g, s) {
  let n = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  for (const item of s) {
    if (item >= g[n]) n++;
  }

  return n;
};
