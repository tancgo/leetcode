// 递归
var hasPathSum = function (root, sum) {
  if (!root) return false;

  let result = false;

  const dfs = (node, value) => {
    if (!node.left && !node.right && value === sum) result = true;
    console.log(node.val, value);
    if (node.left) dfs(node.left, value + node.left.val);
    if (node.right) dfs(node.right, value + node.right.val);
  };

  dfs(root, root.val);

  return result;
};

// 迭代法
var hasPathSum = function (root, sum) {
  if (!root) return false;

  const stack = [[root, root.val]];

  while (stack.length) {
    const [node, pathSum] = stack.pop();
    console.log(node.val, pathSum);
    if (!node.right && !node.left && pathSum === sum) return true;

    if (node.right) stack.push([node.right, node.right.val + pathSum]);
    if (node.left) stack.push([node.left, node.left.val + pathSum]);
  }

  return false;
};