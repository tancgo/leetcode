//  从数组中任意选择一个基准，所有比基准小的放在基准前面，大的放在基准后面
Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    const left = [];
    const right = [];
    const mid = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
      console.log(left, mid, right);
    }
    return [...rec(left), mid, ...rec(right)];
  };

  const res = rec(this);
  
  res.forEach((n, i) => {
    this[i] = n;
  });

  console.log(this);
};

const arr = [5, 8, 11, 1, 78, 9, 2];

arr.quickSort();