// 理解题意 公共前缀意思是从第一个字符开始
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let target = strs[0]; // 取第一个字符串与第二个对比，用这俩的公共前缀继续比对下去

  for (let i = 1; i < strs.length; i++) {
    // console.log(strs[i])
    for (var j = 0; j < target.length && j < strs[i].length; j++) {
      // console.log(target[j], strs[i][j])
      if (target[j] !== strs[i][j]) {
        break;
      }
    }

    target = target.substr(0, j);
    // 这个加上是优化， 如果公共前缀为空的话可以提前终止循环
    if (target === "") return target;
  }
  return target;
};
