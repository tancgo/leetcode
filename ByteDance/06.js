const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1],
];

function isSameIsland(grid, row1, col1, row2, col2) {
  const width = grid[0].length - 1;
  const height = grid.length - 1;
  const queue = [[row1, col1]];
  const map = new Map();
  const target = String([row2, col2]);

  while (queue.length) {
    const cur = queue.shift();
    const [i, j] = cur;
    map.set(String(cur), true);

    const topId = String([i - 1, j]);
    if (i > 1 && grid[i - 1][j] && !map.has(topId)) {
      if (topId === target) return true;
      queue.push([i - 1, j]);
    }

    // 右
    rightId = String([i, j + 1]);
    if (j < width && grid[i][j + 1] && !map.has(rightId)) {
      if (rightId === target) return true;
      queue.push([i, j + 1]);
    }

    // 下
    const bottomId = String([i + 1, j]);
    if (i < height && grid[i + 1][j] && !map.has(bottomId)) {
      if (bottomId === target) return true;
      queue.push([i + 1, j]);
    }

    // 左
    const leftId = String([i, j - 1]);
    if (j > 1 && grid[i][j - 1] && !map.has(leftId)) {
      if (leftId === target) return true;
      queue.push([i, j - 1]);
    }
  }

  return false;
}

console.log(isSameIsland(grid, 0, 2, 1, 5));
console.log(isSameIsland(grid, 0, 7, 2, 5));
console.log(isSameIsland(grid, 1, 7, 2, 6));
