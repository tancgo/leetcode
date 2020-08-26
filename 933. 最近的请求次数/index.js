/**
 * 这里的 t 就是一个单纯的数字，不是数组或其他格式
题目的实际意思，就是说 [[],[1],[100],[3001],[3002]] 中的数字，代表发送请求的时间节点，这里的每个数字都会调用一次 ping 函数，
用来返回包括当前在内的前 3000 毫秒中总共有几个请求（也就是数组元素的个数）。
比如 3001 之前有 1 和 100，所以返回值就是 3，3002 之前有 100 和 3001，也返回 3。仅此而已。用队列保留差距在 3000 以内的数组元素，即可得出总数。
 */

var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);

  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }

  return this.queue.length;
};
