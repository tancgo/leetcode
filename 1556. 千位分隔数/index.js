// 转换成字符串遍历，时间复杂度为O(N)
var thousandSeparator = function (n) {
  if (n < 1000) return n.toString();
  const queue = [];
  const m = n.toString();
  const len = m.length;
  let count = 0;

  for (let i = len - 1; i >= 0; i--) {
    count++;
    // console.log(m[i], i+1, !(count% 3))
    queue.push(m[i]);

    if (!(count % 3) && count < len) queue.push(",");
  }

  // console.log(queue)
  return queue.reverse().join("");
};

// 数位分离
var thousandSeparator1 = function (n) {
  if (!n) return "0";
  let count = 0;
  let res = "";

  while (n) {
    const cur = n % 10;
    res += cur;
    n = (n / 10) | 0;
    count++;
    if (count % 3 === 0 && n) res += ".";
  }

  return res.split("").reverse().join("");
};


console.log(thousandSeparator(123444))