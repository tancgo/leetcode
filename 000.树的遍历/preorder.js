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

preorder(bt);
