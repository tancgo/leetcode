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
var minDepth = function (root) {
  if (root == null) return 0;

  const queue = [root];
  let depth = 1;

  while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
          const cur = queue.shift();
          if (!cur.left && !cur.right) return depth;
          if (cur.left) queue.push(cur.left);
          if (cur.right) queue.push(cur.right);
      }
      // 如果还有下一层则加1
      if (queue.length) depth++;
  }
};

// 解法2
var minDepth = function (root) {
  if (root == null) return 0;

  const queue = [[root, 1]];

  while (queue.length) {
      const [cur, l] = queue.shift();
      if (!cur.left && !cur.right) return l;
      if (cur.left) queue.push([cur.left, l + 1]);
      if (cur.right) queue.push([cur.right, l + 1]);
  }
};