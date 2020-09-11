var maxProfit = function (prices) {
  const stack = [prices[0]]; // 维护一个栈
  let max = 0;

  for (i = 1; i < prices.length; i++) {
    console.log(stack);
    stack.push(prices[i]); // 入栈一个元素
    if (prices[i] <= stack[0]) {
      stack.shift(); // 如果这个值小于等于栈底，则则删除栈底
    } else {
      max = Math.max(max, prices[i] - stack[0]); // 如果这个值大于栈底，记录差值和max的最大值
      stack.pop(); // 删除栈顶
    }
  }

  return max;
};

// 细想之下没必要维护一个栈，只需要记录最小值即可
var maxProfit = function (prices) {
  let min = prices[0]; // 记录最小值
  let money = 0;

  for (i = 1; i < prices.length; i++) {
    // console.log(min);
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] > min) {
      money = Math.max(money, prices[i] - min);
    }
  }

  return money;
};
