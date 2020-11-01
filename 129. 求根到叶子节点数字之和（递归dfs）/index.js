// dfs递归
var sumNumbers = function (root) {
  function dfs(node, cur) {
    if (node === null) return 0;

    cur = 10 * cur + node.val;

    if (node.left === null && node.right === null) {
      return cur;
    }

    return dfs(node.left, cur) + dfs(node.right, cur);
  }

  return dfs(root, 0);
};

// 回溯法
var sumNumbers = function (root) {
  const res = [];
  function dfs(node, cur) {

    console.log(node, cur)

    if (node === null) return 0;

    cur.push(node.val);
    

    if (node.left === null && node.right === null) {
      // console.log(cur)
      
      res.push(cur.slice());
      // cur.pop();

      // return; 此处不应该return 可以继续走后面的pop() ,否则return前需要加一次pop()
    }

    if(node.left) dfs(node.left, cur);
    if(node.right) dfs(node.right, cur);

    cur.pop();
  }

  dfs(root, []);

  return res.reduce((acc, item) => {
    acc += item.join("") | 0;

    return acc;
  }, 0);
};

// 回溯法2
var sumNumbers = function (root) {
  if (root === null) {
    return 0;
  }
  let result = 0;
  let paths = [];
  var dfs = function (node) {
    if (node === null) {
      return;
    }
    paths.push(node.val);

    if (node.left === null && node.right === null) {
      // 如果是叶子节点
      result += paths.join("") | 0;
    }

    dfs(node.left);

    dfs(node.right);

    paths.pop(); // 每次递归后返回上一级代码，需要把当前加入的节点弹出，还原数组种的节点
  };

  dfs(root);
  return result;
};
