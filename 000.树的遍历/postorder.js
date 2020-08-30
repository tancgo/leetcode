const bt = require("./bt");

// 递归
// const postorder = (node) => {
//   if (!node) return;

//   postorder(node.left);
//   postorder(node.right);
//   console.log(node.val);
// };

// 非递归, 后序是左右根，倒过来是根右左，采用先序遍历（根左右）的思想逆序输出（根右左，需要调整一下入栈顺序）
const postorder = (node) => {
  if (!node) return;
  const stack = [node];
  const outputStack = [];

  while (stack.length) {
    const peak = stack.pop();
    outputStack.push(peak);
    // if (peak.right) stack.push(peak.right);
    // if (peak.left) stack.push(peak.left);
    // 相比于先序遍历，入栈顺序需要调整一下
    if (peak.left) stack.push(peak.left);
    if (peak.right) stack.push(peak.right);
  }

  while (outputStack.length) {
    const n = outputStack.pop();

    console.log(n.val);
  }
};

postorder(bt);
