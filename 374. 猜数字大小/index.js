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
