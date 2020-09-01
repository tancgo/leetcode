// 颜色标记法
var postorderTraversal = function (root) {
  const [WHITE, GREEN] = [0, 1];
  const stack = [[WHITE, root]];
  const result = [];

  while (stack.length) {
    const [color, node] = stack.pop();

    if (!node) continue;
    // 后序遍历是左右根的顺序
    if (color === WHITE) {
      stack.push([GREEN, node]);
      stack.push([WHITE, node.right]);
      stack.push([WHITE, node.left]);
    } else {
      result.push(node.val)
    }
  }

  return result;
};

// 前序遍历是根左右，后续遍历是左右根，采用前序遍历的思想逆序输出，
var postorderTraversal = function (root) {
  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    result.push(node.val)

    stack.push(node.left);
    stack.push(node.right);

  }

  return result.reverse();
};
