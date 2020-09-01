const graph = require("./graph");

const visited = new Set();

const dfs = (node) => {
  console.log(node);
  visited.add(node);
  graph[node].forEach((item) => {
    if (!visited.has(item)) {
      dfs(item);
    }
  });
};

dfs(2);
