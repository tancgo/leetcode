/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 遇到1则将岛屿数量+1，并将相邻所有陆地变为0，直至遍历完整个网格
  if (!grid.length) return 0;
  const height = grid.length;
  const width = grid[0].length;

  let count = 0;

  function dfs(grid, i, j) {
    // 超出网格边界
    if (i < 0 || j < 0 || i >= height || j >= width) return;

    // grid[i][j] !== '1' 终止
    if (grid[i][j] !== "1") return;

    grid[i][j] = "0";

    dfs(grid, i - 1, j); // 上
    dfs(grid, i + 1, j); // 下
    dfs(grid, i, j - 1); // 左
    dfs(grid, i, j + 1); // 右
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }

  return count;
};

var numIslands1 = function (grid) {
  // 遇到1则将岛屿数量+1，并将相邻所有陆地变为0，直至遍历完整个网格
  if (!grid.length) return 0;
  const height = grid.length;
  const width = grid[0].length;

  let count = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === "1") {
        count++;
        grid[i][j] = "0";
        let queue = [];
        queue.push([i, j]);

        while (queue.length) {
          const cur = queue.shift();
          const [x, y] = cur;

          // 上
          if (x > 0 && grid[x - 1][y] === "1") {
            queue.push([x - 1, y]);
            grid[x - 1][y] = "0";
          }

          // 下
          if (x < height - 1 && grid[x + 1][y] === "1") {
            queue.push([x + 1, y]);
            grid[x + 1][y] = "0";
          }

          // 左
          if (y > 0 && grid[x][y - 1] === "1") {
            queue.push([x, y - 1]);
            grid[x][y - 1] = "0";
          }

          // 右
          if (y < width - 1 && grid[x][y + 1] === "1") {
            queue.push([x, y + 1]);
            grid[x][y + 1] = "0";
          }
        }
      }
    }
  }

  return count;
};

const grid = [
  ["0", "0", "1", "0", "0", "0", "0", "1", "0"],
  ["0", "0", "1", "0", "0", "1", "0", "1", "1"],
  ["1", "1", "1", "1", "1", "1", "1", "0", "1"],
];

const grid1 = [
  ["0", "0", "1", "0", "0", "0", "0", "1", "0"],
  ["0", "0", "1", "0", "0", "1", "0", "1", "1"],
  ["1", "1", "1", "1", "1", "1", "1", "0", "1"],
];

console.log(numIslands(grid), "dfs");
console.log(numIslands1(grid1), "bfs");
