// 二分搜索
var guessNumber = function (n) {
  let higher = n;
  let lower = 1;

  while (lower <= higher) {
    const mid = Math.floor((higher + lower) / 2);
    const res = guess(mid);
    if (res === -1) {
      higher = mid - 1;
    } else if (res === 1) {
      lower = mid + 1;
    } else if (res === 0) {
      return mid;
    }
  }
};

// 分治思想的递归
var guessNumber = function (n) {
  const rec = (lower, higher) => {
    if (lower > higher) return;

    const mid = Math.floor((lower + higher) / 2);
    const res = guess(mid);

    if (res === 0) {
      return mid;
    } else if (res === 1) {
      return rec(mid + 1, higher);
    } else {
      return rec(lower, mid - 1);
    }
  };

  return rec(1, n);
};
