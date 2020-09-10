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
