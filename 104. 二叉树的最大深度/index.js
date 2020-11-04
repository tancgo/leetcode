/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归法深度遍历
var maxDepth = function (root) {
  let depth = 0;
  const dfs = (node, l) => {
    if (!node) return;
    if (!node.left && !node.right) {
      depth = Math.max(depth, l);
    }

    // console.log(node.val, l)
    dfs(node.left, l + 1);
    dfs(node.right, l + 1);
  };

  dfs(root, 1);

  return depth;
};

// bfs
const maxDepth = (root) => {
  if (root == null) return 0;

  const queue = [root];
  let depth = 1;

  while (queue.length) {
    // 当前层的节点个数
    const levelSize = queue.length; // 存下来， 否则for循环中该值会变化
    for (i = 0; i < levelSize; i++) {
      // 当前出列的节点
      const cur = queue.shift();
      // 左右子节点入列
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }

    // 当前层所有节点已经出列，如果有下一层节点，则队列不为空
    if (queue.length) depth++;
  }

  return depth;
};

// 二次重做采用了回溯的思想，比第一次做时候参考的dfs 复杂了一点
var maxDepth = function (root) {
  let max = 0;

  function dfs(node, temp) {
    if (node === null) return 0;

    temp.push(node.val);
    if (node.left === null && node.right === null) {
      max = Math.max(max, temp.length);
    }

    if (node.left) dfs(node.left, temp);
    if (node.right) dfs(node.right, temp);

    temp.pop();
  }

  dfs(root, []);

  return max;
};
