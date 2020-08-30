const bt = require("./bt");

// 递归
// const inorder = (node) => {
//   if(!node) return;
//   inorder(node.left);
//   console.log(node.val);
//   inorder(node.right);
// };

// 非递归
const inorder = (node) => {
  if (!node) return;

  const stack = [];

  let p = node;

  while (stack.length || p) {
    // 将所有左子树压入栈中
    while (p) {
      stack.push(p);
      p = p.left;
    }

    // 弹出栈顶的元素
    const peak = stack.pop();
    console.log(peak.val);
    // 指针指向该元素的右节点
    p = peak.right;
  }
};

inorder(bt);
