// 贪心算法
// 如果第二天的股票比第一天的股票高就卖掉，利润累加
// 此时的局部最优解也是全局最优解
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const gap = prices[i] - prices[i - 1];
    if (gap > 0) {
      profit += gap;
    }
  }

  return profit;
};
