// 分治递归
var invertTree = function (root) {
  if (!root) return null;
  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left),
  };
};

// DFS栈
var invertTree = function (root) {
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node === null) continue;
    [node.left, node.right] = [node.right, node.left];
    stack.push(node.left, node.right);
  }

  return root;
};

// BFS栈
var invertTree = function (root) {
  const queue = [root];

  while (queue.length) {
    const node = queue.pop();

    if (node === null) continue;

    [node.left, node.right] = [node.right, node.left];

    queue.unshift(node.left, node.right);
  }

  return root;
};
