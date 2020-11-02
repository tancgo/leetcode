// 回溯  同题129
var binaryTreePaths = function (root) {
  const res = [];
  function dfs(node, cur) {
    // console.log(node, cur)

    if (node === null) return 0;

    cur.push(node.val);

    if (node.left === null && node.right === null) {
      // console.log(cur)

      res.push(cur.slice().join("->"));
      // cur.pop();

      // return; 此处不应该return 可以继续走后面的pop() ,否则return前需要加一次pop()
    }

    if (node.left) dfs(node.left, cur);
    if (node.right) dfs(node.right, cur);

    cur.pop();
  }

  dfs(root, []);

  return res;
};
