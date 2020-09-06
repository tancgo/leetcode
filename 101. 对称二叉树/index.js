// 分治递归
var isSymmetric = function (root) {
  if (!root) return true;

  const isMirror = (left, right) => {
    if (!left && !right) return true;

    if (
      left &&
      right &&
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    ) {
      return true;
    }

    return false;
  };

  return isMirror(root.left, root.right);
};

// 栈模拟递归
var isSymmetric = (root) => {
  if (!root) return true;
  let leftStack = [],
    rightStack = []; // 维护两个栈
  let curLeft = root.left; // 当前的左子树
  let curRight = root.right; // 当前的右子树
  while (curLeft || curRight || leftStack.length || rightStack.length) {
    while (curLeft) {
      // 左子树存在
      leftStack.push(curLeft); // 推入leftStack栈
      curLeft = curLeft.left; // 不断将左子树入栈
    }
    while (curRight) {
      // 右子树存在
      rightStack.push(curRight); // 推入rightStack栈
      curRight = curRight.right; // 不断将右子树压入栈
    }
    if (leftStack.length !== rightStack.length) return false;
    // 栈的高度不相等，说明结构不对称
    curLeft = leftStack.pop(); // 栈顶节点出栈，赋给curLeft
    curRight = rightStack.pop(); // 栈顶节点出栈，赋给curRight
    if (curLeft.val !== curRight.val) return false;
    // 两个栈出栈的节点值不相等 不对称
    curLeft = curLeft.right; // 考察左子树的right
    curRight = curRight.left; // 考察右子树的left
  }
  return true;
};
