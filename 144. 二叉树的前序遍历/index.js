// 颜色标记法，注释见094二叉树的中序遍历
var preorderTraversal = function (root) {
  const [WHITE, GREEN] = [0, 1];
  const stack = [[WHITE, root]];
  const result = [];

  while (stack.length) {
    const [color, node] = stack.pop();

    if (!node) continue;

    if (color === WHITE) {
      stack.push([WHITE, node.right]);
      stack.push([WHITE, node.left]);
      stack.push([GREEN, node]);
    } else {
      result.push(node.val);
    }
  }

  return result;
};

// 普通栈
var preorderTraversal = function (root) {
  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    result.push(node.val);
    stack.push(node.right);
    stack.push(node.left);
  }

  return result;
};
