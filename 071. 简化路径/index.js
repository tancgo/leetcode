/**
 将path以'/'分割成数组, 新建一个栈stack为当前的路径，遍历path分割后的数组元素:
 遇到正常的字母时，推入 stack 中
 遇到 .. 时，stack 弹出最近一个路径
 遇到 . 或者为空时，不修改当前 stack。
 最后返回 '/' + stack.join('/') 为新的路径
 */
var simplifyPath = function (path) {
  console.log(paths);
  const stack = [];

  for (const item of paths) {
    if (item === "" || item === ".") {
      continue;
    } else if (item === "..") {
      stack.pop();
    } else {
      stack.push(item);
    }
  }

  return "/" + stack.join("/");
};
