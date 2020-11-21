function calc(arr) {
  let s = "";

  for (const n of arr) {
    for (const i of n) {
      // 元素为empty时 保存空格
      if (!i) {
        s += " ";
      } else {
        // 元素为*时 保存*
        s += i;
      }
    }
    console.log(s);
    s = "";
  }
}

function print(n) {
  // 生成一个二维数组， 元素长度为len
  const len = 2 * (n - 1) + 1;
  const arr = Array.from({ length: n }, (_, i) => Array(len));

  // 根据规律设置 *
  for (let i = 0; i < n; i++) {
    for (let j = n - i - 1; j <= n + i - 1; j++) {
      arr[i][j] = "*";
    }
  }

  // 打印菱形上半部分
  calc(arr);

  // 打印菱形下半部分
  calc(arr.slice().reverse().slice(1));
}

print(3);
