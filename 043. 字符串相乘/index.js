var multiply = function (num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  const result = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    const v1 = num1[i];
    for (let j = len2 - 1; j >= 0; j--) {
      const v2 = num2[j];
      const multi = v1 * v2;
      const sum = result[i + j + 1] + multi;

      result[i + j + 1] = sum % 10;

      // x | 0 按位操作  忽略掉小数 相当于Math.floor()
      result[i + j] += (sum / 10) | 0;
    }
  }

  // 前几位可能为0 需要去0操作
  while (result[0] === 0) {
    result.shift();
  }

  return result.length ? result.join("") : "0";
};

// 如果可以使用BigInt类型的话
var multiply = function (num1, num2) {
  return BigInt(num1) * BigInt(num2) + "";
};
