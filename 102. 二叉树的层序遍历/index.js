/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) return [];
  const queue = [root];
  const result = [];

  while (queue.length) {
    const len = queue.length;
    let level = []; // 记录当前层级

    // 循环当前层级
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      level.push(cur.val);
      // console.log(cur.val)
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    result.push(level);
    level = []; // 置为空进入下一层级
  }

  return result;
};

// 在队列中记录层级

var levelOrder = function (root) {
  if (root == null) return [];
  const queue = [[root, 0]]; // 记录层级
  const result = [];

  while (queue.length) {
    const [cur, level] = queue.shift();
    if (!result[level]) {
      result.push([cur.val]);
    } else {
      result[level].push(cur.val);
    }

    // console.log(cur.val)
    if (cur.left) queue.push([cur.left, level + 1]);
    if (cur.right) queue.push([cur.right, level + 1]);
  }

  return result;
};
