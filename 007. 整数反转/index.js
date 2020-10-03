var reverse = function (x) {
  let result = 0;

  while (x !== 0) {
    // x % 10 可以取出末尾数，作为result的第一个数
    result = result * 10 + (x % 10);
    // 通过 | 0 取整
    x = (x / 10) | 0;
  }

  // result | 0 超过32位的整数转换结果不等于自身，可用作溢出判断
  return (result | 0) === result ? result : 0;
};
