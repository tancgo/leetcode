// 129. 求根到叶子节点数字之和
var sumNumbers = function (root) {
  function dfs(node, cur) {
    if (node === null) return 0;

    cur = 10 * cur + node.val;

    if (node.left === null && node.right === null) {
      return cur;
    }

    return dfs(node.left, cur) + dfs(node.right, cur);
  }

  return dfs(root, 0);
};
