
// 递归解法
var fib = function (N) {
  return N < 2 ? N : fib(N - 1) + fib(N - 2)
};

// 动态规划
var fib = function (N) {
  if (N < 2) return N
  const res = [0, 1];

  let pre = 0
  let cur = 1

  while (res.length <= N) {
    const temp = pre + cur
    res.push(temp)
    pre = cur
    cur = temp
  }

  return res[res.length - 1]
};

// 动态规划优化
var fib = function (N) {
  if (N < 2) return N

  let pre = 0
  let cur = 1
  let count = 2

  while (count <= N) {
      [pre, cur] = [cur, pre + cur]
      count++
  }

  return cur
};