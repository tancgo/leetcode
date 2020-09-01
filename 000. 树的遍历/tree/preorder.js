const bt = require("./bt");

// 递归
// const preorder = (node) => {
//   if (!node) return;
//   console.log(node.val);

//   preorder(node.left);
//   preorder(node.right);
// };

// 非递归
const preorder = (node) => {
  if (!node) return;
  const stack = [node];

  while (stack.length) {
    const peak = stack.pop();
    console.log(peak.val);

    if (peak.right) stack.push(peak.right); // 先序遍历是根左右，所以先将右节点压入栈中
    if (peak.left) stack.push(peak.left);
  }
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

preorder(bt);
