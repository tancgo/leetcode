// 方法1 递归  O(N)
var addDigits = function (num) {
  let sum = 0;
  const str = num + "";

  for (let i = 0; i < str.length; i++) {
    sum += str[i] | 0;
  }

  return sum > 9 ? addDigits(sum) : sum;
};

// 方法二
// n = 100a + 10b + c   =>  add = a + b + c =>  n - add = 99a + 9b  差值可以被9整除， 说明每次缩小9的倍数
// 所以如果 res = num % 9, 不为 0 则返回 res， 为 0 则返回 9
var addDigits = function (num) {
  while (num > 9) {
    num = num % 9;

    if (num === 0) {
      return 9;
    }
  }

  return num;
};
