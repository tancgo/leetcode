/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];

  const stack = [];
  const result = [];
  let p = root;

  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }

    // 弹出栈顶元素
    const peak = stack.pop();
    result.push(peak.val);
    // 指针指向右子树
    p = peak.right;
  }

  return result;
};

// 颜色标记法
var inorderTraversal = function (root) {
  const [WHITE, GREEN] = [0, 1]; // WHITE - 未访问的新结点； GRAY - 已访问的结点
  const stack = [[WHITE, root]];
  const result = [];

  while (stack.length) {
    const [color, node] = stack.pop(); // 若栈中有元素，则按照左节点、根节点、右节点的顺序依次弹出元素

    if (!node) continue;

    // 当前指向的结点是未访问过的结点，将其右节点，根节点，左节点依次入栈
    if (color === WHITE) {
      stack.push([WHITE, node.right]);
      stack.push([GREEN, node]);
      stack.push([WHITE, node.left]);
    } else {
      result.push(node.val);
    }
  }

  return result;
};
